package controllers

import (

	"github.com/astaxie/beego"
	"github.com/bradrydzewski/go.auth"
	"honeybee/beegoapp"
	"net/http"
	"fmt"
	"errors"
)


// A User is returned by the AuthProvider upon success authentication.
type User interface {
	Id()       string // Unique identifier of the user
	Provider() string // Name of the Authentication Provider (ie google, github)
	Name()     string // Name of the User (ie lastname, firstname)
	Email()    string // Email Address of the User
	Org()      string // Company or Organization the User belongs to
	Picture()  string // URL of the User's Profile picture
	Link()     string // URL of the User's Profile page
}
func (u *user) Id() string       { return u.id }
func (u *user) Provider() string { return u.provider }
func (u *user) Name() string     { return u.name }
func (u *user) Email() string    { return u.email }
func (u *user) Org() string      { return u.org }
func (u *user) Link() string     { return u.link }
func (u *user) Picture() string  { return u.picture }
func (u *user) Avatar() string   { return u.picture }

type user struct {
	id       string
	provider string
	name     string
	email    string
	org      string
	picture  string
	link     string
}

var (
	ErrAuthDeclined = errors.New("Login was unsuccessful or cancelled by User")
)
type AuthController struct {
	beego.Controller
}

func (this * AuthController) Logout(){
	auth.DeleteUserCookie(this.Ctx.ResponseWriter, this.Ctx.Request)
	this.Redirect("/",http.StatusSeeOther)
}


// GetAuthenticatedUser will retrieve the User information from the URL
// query parameters, per the OpenID specification. If the authentication failed,
// the function will return an error.
func (this *AuthController) getAuthenticatedUser() (User,  error) {
	fmt.Println("GetAuthenticatedUser")
	r := this.Ctx.Request
//	w := this.Ctx.ResponseWriter
	// Parse the url parameters
	params := r.URL.Query()
	for pos,val := range params{
		fmt.Println(fmt.Sprintf("pval:%v ",val,pos))
	}

	fmt.Println(fmt.Sprintf("GetAuthenticatedUser:%v",params))
	// Check to see if the user successfully authenticated
	if params.Get("openid.mode") == "cancel" {
		return nil,  ErrAuthDeclined
	}

	// Get the user details from the URL parameters
	claimed_id := params.Get("openid.identity")
	lastName := params.Get("openid.ext1.value.lastname")
	firstName := params.Get("openid.ext1.value.firstname")
	fullName := fmt.Sprintf("%s %s", firstName, lastName)
	email := params.Get("openid.ext1.value.email")

	// Return the User data
	// TODO for now we are re-using the Google User
	user := user{id: claimed_id, email: email, name: fullName }
	return &user,  nil
}

func (this *AuthController) Login() {

	fmt.Println("==>>==>>==>>==>>func (this *AuthController) Login()==>>==>>==>>==>>");
	r := this.Ctx.Request
	w := this.Ctx.ResponseWriter
	// Redirect the user, if required
	if beegoapp.TheApp.TheAuthHandler.Provider().RedirectRequired(r) == true {
		beegoapp.TheApp.TheAuthHandler.Provider().Redirect(w, r)
		return
	}

	// Get the authenticated user Id
	u, t, err := beegoapp.TheApp.TheAuthHandler.Provider().GetAuthenticatedUser(w, r)
	if err != nil {
		// If there was a problem, invoke failure
		if beegoapp.TheApp.TheAuthHandler.Failure == nil {
			auth.DefaultFailure(w, r, err)
		} else {
			beegoapp.TheApp.TheAuthHandler.Failure(w, r, err)
		}
		return
	}

	// Invoke the success function
	if beegoapp.TheApp.TheAuthHandler.Success == nil {
		auth.DefaultSuccess(w, r, u, t)
	} else {
		beegoapp.TheApp.TheAuthHandler.Success(w, r, u, t)
	}
	//	endpoint := "https://accounts.google.com/o/openid2/auth"
//	_MyAuthHandler := auth.OpenId(endpoint)


	//beegoapp.TheApp.TheAuthHandler.ServeHTTP(w,r)
//	MyAuthHandler.ServeHTTP(w,r)




}

