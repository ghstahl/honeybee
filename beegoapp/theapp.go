package beegoapp

import (
	_ "github.com/ghstahl/honeybee/filters"
	"github.com/bradrydzewski/go.auth"
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/config"

	"fmt"
//	"honeybee/filters"
	"github.com/ghstahl/pingbeego/filters"
	"github.com/ghstahl/honeybee/auth/openid"

)

var TheApp = &BeegoApp{}
type BeegoApp struct {
	// provider specifies the policy for authenticating a user.
	TheAuthHandler *auth.AuthHandler

}

func (self *BeegoApp) initializeAuth() {
	auth.Config.CookieSecret = []byte("7H9xiimk2QdTdYI7rDddfJeV")
	auth.Config.LoginSuccessRedirect = "/#/about/me"
	auth.Config.CookieSecure = false
	self.TheAuthHandler = auth.OpenId("https://accounts.google.com/o/openid2/auth")
	self.TheAuthHandler.Success = openid.MySuccess
}

func (self *BeegoApp) initializeFilters() {

	filters.TheFilterConfigs.Load();
//	filters.TheFilterConfigs.Load()


	jsonconf, err := config.NewConfig("json", "conf/filters.json")
	if err != nil {
		panic(err)
	}
	if jsonconf.String("appname") != "beeapi" {
		panic("appname not equal to beeapi")
	}

	userfilter := jsonconf.String("userfilter");
	fmt.Println(userfilter)

//	theFunc := filters.TheFilters.FetchFilterFunc("UserFilterFunc")
//	beego.InsertFilter("*", beego.AfterStatic,   theFunc)
}



func (self *BeegoApp) Initialize() {

	self.initializeAuth()
	self.initializeFilters()
}

func (self *BeegoApp) Run() {
	beego.Run()
}


