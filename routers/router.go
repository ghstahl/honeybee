package routers

import (
	"honeybee/controllers"
	"github.com/astaxie/beego"
)

func init() {
    beego.Router("/", &controllers.MainController{})
	beego.AutoRouter(&controllers.AuthController{})
	beego.AutoRouter(&controllers.TwentyFourtyEightController{})

//	beego.AutoRouter(&controllers.SupportController{})

	beego.Router("/support/:all", &controllers.SupportController{})
	beego.RESTRouter("/supportapi/v1/", &controllers.ObjectController{})
	beego.RESTRouter("/accountapi/v1/", &controllers.AccountManagementApiController{})

}
