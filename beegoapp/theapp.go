package beegoapp

import (
	"github.com/bradrydzewski/go.auth"
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/config"
	"github.com/astaxie/beego/context"
	"fmt"
)

type BeegoApp struct {
	// provider specifies the policy for authenticating a user.
	TheAuthHandler *auth.AuthHandler
}

func (self *BeegoApp) initializeAuth() {
	auth.Config.CookieSecret = []byte("7H9xiimk2QdTdYI7rDddfJeV")
	auth.Config.LoginSuccessRedirect = "/#/about/me"
	auth.Config.CookieSecure = false
	self.TheAuthHandler = auth.OpenId("https://accounts.google.com/o/openid2/auth")
}

func (self *BeegoApp) initializeFilters() {
	jsonconf, err := config.NewConfig("json", "conf/filters.json")
	if err != nil {
		panic(err)
	}
	if jsonconf.String("appname") != "beeapi" {
		panic("appname not equal to beeapi")
	}

	var FilterUser = func(ctx *context.Context) {
		fmt.Println(fmt.Sprintf("ctx.Request.URL: %v",ctx.Request.URL))
		fmt.Println(fmt.Sprintf("ctx.Request.URL.RequestURI: %v",ctx.Request.URL.RequestURI()))
		fmt.Println(fmt.Sprintf("ctx.Request.URL.Opaque: %v",ctx.Request.URL.Opaque))
		fmt.Println(fmt.Sprintf("ctx.Request.URL.RawQuery: %v",ctx.Request.URL.RawQuery))
		fmt.Println(fmt.Sprintf("ctx.Request.URL.Fragment: %v",ctx.Request.URL.Fragment))
		fmt.Println(fmt.Sprintf("ctx.Request.URL.Host: %v",ctx.Request.URL.Host))
		fmt.Println(fmt.Sprintf("ctx.Request.URL.Path: %v",ctx.Request.URL.Path))
		fmt.Println(fmt.Sprintf("ctx.Request.URL.User: %v",ctx.Request.URL.User))

		fmt.Println(fmt.Sprintf("ctx.Request: %v",ctx.Input.))


}

	beego.InsertFilter("*", beego.AfterStatic, FilterUser)
}

func (self *BeegoApp) Initialize() {
	self.initializeAuth()
	self.initializeFilters()
}

func (self *BeegoApp) Run() {
	beego.Run()
}

var TheApp = &BeegoApp{}
