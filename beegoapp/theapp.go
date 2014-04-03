package beegoapp

import (
	"github.com/bradrydzewski/go.auth"
	"github.com/astaxie/beego"
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
func (self *BeegoApp) Initialize() {
	self.initializeAuth()
}
func (self *BeegoApp) Run() {
	beego.Run()
}

var TheApp = &BeegoApp{}
