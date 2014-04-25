package controllers

import (
	"github.com/astaxie/beego"
	"fmt"
)

type SupportController struct {
	beego.Controller
}
func (this *SupportController) Prepare() {
	fmt.Println("func (c *MainController) Prepare()")
	this.LayoutSections = make(map[string]string)
	this.TplNames = "index.tpl"
	this.LayoutSections["SharedHead"] = "shared/_head.tpl"
	this.LayoutSections["Header"] = "shared/_header.tpl"
	this.LayoutSections["Footer"] = "shared/_footer.tpl"
	this.LayoutSections["HtmlHead"] = ""
	this.Layout = "shared/_layout.tpl"
}
func (this *SupportController) Get() {

	this.LayoutSections["Script"] = "ngApps/3/ngScript.tpl"


	this.Data["Website"] = "beego.me"
	this.Data["Email"] = "astaxie@gmail.com"
	this.Data["Title"] = "support Well Hell"


	//user := this.Ctx.Request.URL.User
	//this.Data["LoggedInAs"] = user



}
