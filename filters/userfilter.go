package filters

import (
	"github.com/astaxie/beego/context"
	"fmt"
	"github.com/astaxie/beego"
	"github.com/ghstahl/pingbeego/reflection"
	"reflect"
	"github.com/bradrydzewski/go.auth"
	"net/url"
)

type UserFilterType struct {
}

func (v UserFilterType) FilterFunc() beego.FilterFunc{
	return func(ctx *context.Context) {
		user, err := auth.GetUserCookie(ctx.Request)
		//if no active user session then authorize user
		if err != nil || user.Id() == "" {
			fmt.Println(fmt.Sprintf("&&&&&NO USER&&&&&&&&&&"))
			//http.Redirect(w, r, Config.LoginRedirect, http.StatusSeeOther)
			return
		}
		ctx.Request.URL.User = url.User(user.Id())

		fmt.Println(fmt.Sprintf("$$$$$$$$$$$$$$$ USER $$$$$$$$$$$$$$$"))
		fmt.Println(user)

		ctx.Input.Data["LoggedInAs"] = ctx.Request.URL.User.Username()

	}

}

func init() {
	var x UserFilterType
	reflection.TheReflectRepository.ValueRepository["UserFilterType"] = reflect.ValueOf(x)
	reflection.TheReflectRepository.TypeRepository["UserFilterType"] = reflect.TypeOf(x)
}

