package controllers

import (
	"github.com/astaxie/beego"
	"fmt"
)

type MainController struct {
	beego.Controller
}

func (this *MainController) Prepare() {
	fmt.Println("func (c *MainController) Prepare()")
	this.LayoutSections = make(map[string]string)
	this.TplNames = "index.tpl"
	this.LayoutSections["SharedHead"] = "shared/_head.tpl"
	this.LayoutSections["Header"] = "shared/_header.tpl"
	this.LayoutSections["Footer"] = "shared/_footer.tpl"
	this.Data["Jumbotron"] = true
	this.LayoutSections["HtmlHead"] = ""
	this.Layout = "shared/_layout.tpl"
}

func (this *MainController) Get() {

	this.LayoutSections["Script"] = "ngApps/1/ngScript.tpl"

	this.Data["Website"] = "beego.me"
	this.Data["Email"] = "astaxie@gmail.com"
	this.Data["Title"] = "Well Hell"


}
