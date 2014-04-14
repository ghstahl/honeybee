package openid

import (
	"errors"
	"fmt"
	"github.com/bradrydzewski/go.auth"
	"net/http"
	"github.com/astaxie/beego/cache"
	"time"
	"flag"
	"net/url"
	"log"
)

func verifyNonce(vals url.Values, store NonceStore) error {
	nonce := vals.Get("openid.response_nonce")
	endpoint := vals.Get("openid.endpoint")
	return store.Accept(endpoint, nonce)
}

// DefaultSuccess will redirect a User, using an http.Redirect, to the
// Config.LoginSuccessRedirect url upon successful authentication.
var MySuccess = func(w http.ResponseWriter, r *http.Request, u auth.User, t auth.Token) {

	fmt.Println("_______________MySuccess:")

	// Parse the url parameters
	queryParams := r.URL.Query()
	for i:=range queryParams{
		fmt.Println(fmt.Sprintf("queryValue:%v:%s",i,queryParams[i]))
	}

	var returnUrl string
	returnUrl = auth.Config.LoginSuccessRedirect
	err := verifyNonce(queryParams,TheNonceStore)
	if err != nil{
		log.Println(fmt.Sprintf("verifyNonce failed: %v",err))
	}else{
		auth.SetUserCookie(w, r, u)
		if val,ok := queryParams["returnUrl"]; ok {
			returnUrl = val[0]
		}
	}
	fmt.Println(fmt.Sprintf("returnUrl:%s",returnUrl))
	http.Redirect(w, r, returnUrl, http.StatusSeeOther)
}

var TheNonceStore *SimpleNonceStore

func init(){
	fmt.Println("Auth.go Init")
	nonceCache, err := cache.NewCache("memory", `{"interval":60}`)
	if err != nil{
		panic(err)
	}
	TheNonceStore = &SimpleNonceStore{
		nonceCache }
}


var max_nonce_age = flag.Duration("openid-max-nonce-age",
		60*time.Second,
		"Maximum accepted age for openid nonces. The bigger, the more"+
				"memory is needed to store used nonces.")

//var nonceStore = &SimpleNonceStore{Store: make(map[string][]*Nonce)}

type NonceStore interface {
	// Returns nil if accepted, an error otherwise.
	Accept(endpoint, nonce string) error
}

type SimpleNonceStore struct {
	NonceCache cache.Cache
}

func (this *SimpleNonceStore) Accept(endpoint, nonce string) error {
	// Value: A string 255 characters or less in length, that MUST be
	// unique to this particular successful authentication response.
	if len(nonce) < 20 || len(nonce) > 256 {
		return errors.New("Invalid nonce")
	}

	// The nonce MUST start with the current time on the server, and MAY
	// contain additional ASCII characters in the range 33-126 inclusive
	// (printable non-whitespace characters), as necessary to make each
	// response unique. The date and time MUST be formatted as specified in
	// section 5.6 of [RFC3339], with the following restrictions:

	// All times must be in the UTC timezone, indicated with a "Z".  No
	// fractional seconds are allowed For example:
	// 2005-05-15T17:11:51ZUNIQUE
	ts, err := time.Parse(time.RFC3339, nonce[0:20])
	if err != nil {
		return err
	}
	now := time.Now()
	diff := now.Sub(ts)
	if diff > *max_nonce_age {
		return fmt.Errorf("Nonce too old: %ds", diff.Seconds())
	}


	if this.NonceCache.IsExist(endpoint){
		fmt.Println(fmt.Sprintf("endpoint:%v exists",endpoint))

		storedValue := this.NonceCache.Get(endpoint)
		fmt.Println(fmt.Sprintf("storedValue:%v nonce:%v ",storedValue,nonce))
		if storedValue == nonce{
			return errors.New("Nonce already used")
		}
	}
	var xSeconds = int64(*max_nonce_age+1);
	fmt.Println(fmt.Sprintf("xSeconds:%v",xSeconds))
	this.NonceCache.Put(endpoint,nonce,xSeconds)
	return nil
}
