package controllers

import (

	"github.com/astaxie/beego"
	"github.com/bradrydzewski/go.auth"
	"honeybee/beegoapp"
	"net/http"
	"fmt"
)


type AuthController struct {
	beego.Controller
}

func (this * AuthController) Logout(){
	auth.DeleteUserCookie(this.Ctx.ResponseWriter, this.Ctx.Request)
	this.Redirect("/",http.StatusSeeOther)
}



func (this *AuthController) Login() {

	fmt.Println("==>>==>>==>>==>>func (this *AuthController) Login()==>>==>>==>>==>>");
	r := this.Ctx.Request
	w := this.Ctx.ResponseWriter
	beegoapp.TheApp.TheAuthHandler.ServeHTTP(w,r)

}

