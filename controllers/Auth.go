package controllers

import (

	"github.com/astaxie/beego"
	"github.com/bradrydzewski/go.auth"
	"honeybee/beegoapp"
	"net/http"
)
//var MyAuthHandler = auth.OpenId("https://accounts.google.com/o/openid2/auth")

type AuthController struct {
	beego.Controller
}

func (this * AuthController) Logout(){
	auth.DeleteUserCookie(this.Ctx.ResponseWriter, this.Ctx.Request)
	this.Redirect("/",http.StatusSeeOther)
}
func (this *AuthController) Login() {


//	endpoint := "https://accounts.google.com/o/openid2/auth"
//	_MyAuthHandler := auth.OpenId(endpoint)

	r := this.Ctx.Request
	w := this.Ctx.ResponseWriter
	beegoapp.TheApp.TheAuthHandler.ServeHTTP(w,r)
//	MyAuthHandler.ServeHTTP(w,r)




}

