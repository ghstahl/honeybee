package controllers

import (
	"encoding/json"
	"github.com/astaxie/beego"
	"github.com/ghstahl/honeybee/models"
)

type AccountManagementApiController struct {
	beego.Controller
}

func (this *AccountManagementApiController) Post() {
	var ob models.Object
	json.Unmarshal(this.Ctx.Input.RequestBody, &ob)
	objectid := models.AddOne(ob)
	this.Data["json"] = map[string]string{"ObjectId": objectid}
	this.ServeJson()
}

func (this *AccountManagementApiController) Get() {
	objectId := this.Ctx.Input.Params[":objectId"]
	if objectId != "" {
		ob, err := models.GetOne(objectId)
		if err != nil {
			this.Data["json"] = err
		} else {
			this.Data["json"] = ob
		}
	} else {
		obs := models.GetAll()
		this.Data["json"] = obs
	}
	this.ServeJson()
}

func (this *AccountManagementApiController) Put() {
	objectId := this.Ctx.Input.Params[":objectId"]
	var ob models.Object
	json.Unmarshal(this.Ctx.Input.RequestBody, &ob)

	err := models.Update(objectId, ob.Score)
	if err != nil {
		this.Data["json"] = err
	} else {
		this.Data["json"] = "update success!"
	}
	this.ServeJson()
}

func (this *AccountManagementApiController) Delete() {
	objectId := this.Ctx.Input.Params[":objectId"]
	models.Delete(objectId)
	this.Data["json"] = "delete success!"
	this.ServeJson()
}
