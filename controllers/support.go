package controllers

import (
	"github.com/astaxie/beego"
)

type SupportController struct {
	beego.Controller
}

func (this *SupportController) Get() {
	this.LayoutSections = make(map[string]string)
	this.TplNames = "index.tpl"
	this.LayoutSections["SharedHead"] = "shared/_head.tpl"
	this.LayoutSections["Header"] = "shared/_header.tpl"
	this.LayoutSections["Footer"] = "shared/_footer.tpl"
	this.LayoutSections["HtmlHead"] = ""
	this.LayoutSections["Script"] = "ngApps/1/ngScript.tpl"

	this.Layout = "shared/_layout.tpl"
	this.Data["Website"] = "beego.me"
	this.Data["Email"] = "astaxie@gmail.com"
	this.Data["Title"] = "support Well Hell"


	//user := this.Ctx.Request.URL.User
	//this.Data["LoggedInAs"] = user



}
