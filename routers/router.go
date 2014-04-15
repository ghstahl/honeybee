package routers

import (
	"honeybee/controllers"
	"github.com/astaxie/beego"
)

func init() {
    beego.Router("/", &controllers.MainController{})
	beego.AutoRouter(&controllers.AuthController{})
	beego.AutoRouter(&controllers.SupportController{})
	beego.AutoRouter(&controllers.TwentyFourtyEightController{})
}
