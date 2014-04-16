package controllers

import (
	"github.com/astaxie/beego"
	"fmt"
)

type TwentyFourtyEightController struct {
	beego.Controller
}
func (this *TwentyFourtyEightController) Prepare() {
	fmt.Println("func (c *MainController) Prepare()")
	this.LayoutSections = make(map[string]string)
	this.TplNames = "index.tpl"
	this.LayoutSections["SharedHead"] = "shared/_head.tpl"
	this.LayoutSections["Header"] = "shared/_header.tpl"
	this.LayoutSections["Footer"] = "shared/_footer.tpl"
	this.LayoutSections["HtmlHead"] = "ngApps/2048/htmlHead.tpl"
	this.Layout = "shared/_layout.tpl"
}
func (this *TwentyFourtyEightController) Get() {

	this.LayoutSections["Script"] = "ngApps/2048/ngScript.tpl"


	this.Data["Website"] = "beego.me"
	this.Data["Email"] = "astaxie@gmail.com"
	this.Data["Title"] = "2048 Well Hell"


	//user := this.Ctx.Request.URL.User
	//this.Data["LoggedInAs"] = user



}
