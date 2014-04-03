package controllers

import (

	"github.com/astaxie/beego"

	"honeybee/beegoapp"

)
//var MyAuthHandler = auth.OpenId("https://accounts.google.com/o/openid2/auth")

type AuthController struct {
	beego.Controller
}

func (this *AuthController) Login() {


//	endpoint := "https://accounts.google.com/o/openid2/auth"
//	_MyAuthHandler := auth.OpenId(endpoint)

	r := this.Ctx.Request
	w := this.Ctx.ResponseWriter
	beegoapp.TheApp.TheAuthHandler.ServeHTTP(w,r)
//	MyAuthHandler.ServeHTTP(w,r)

	this.LayoutSections = make(map[string]string)
	this.TplNames = "login.tpl"
	this.LayoutSections["SharedHead"] = "shared/_head.tpl"
	this.LayoutSections["Header"] = "shared/_header.tpl"
	this.LayoutSections["Footer"] = "shared/_footer.tpl"
	this.LayoutSections["HtmlHead"] = ""
	this.LayoutSections["Script"] = "ngApps/1/ngScript.tpl"

	this.Layout = "shared/_layout.tpl"
	this.Data["Website"] = "beego.me"
	this.Data["Email"] = "astaxie@gmail.com"
	this.Data["Title"] = "Well Hell"



}

