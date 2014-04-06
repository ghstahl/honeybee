package filters

import (
	"github.com/astaxie/beego/context"
	"fmt"
	"github.com/astaxie/beego"
	"github.com/ghstahl/pingbeego/filters"
)

type UserFilterFuncer interface {
	UserFilterFunc() beego.FilterFunc
}
func init() {
	filters.TheFilterRepository.Repository["UserFilter"] = func(ctx *context.Context) {
		fmt.Println(fmt.Sprintf("ctx.Request.URL: %v",ctx.Request.URL))
		fmt.Println(fmt.Sprintf("ctx.Request.URL.RequestURI: %v",ctx.Request.URL.RequestURI()))
		fmt.Println(fmt.Sprintf("ctx.Request.URL.Opaque: %v",ctx.Request.URL.Opaque))
		fmt.Println(fmt.Sprintf("ctx.Request.URL.RawQuery: %v",ctx.Request.URL.RawQuery))
		fmt.Println(fmt.Sprintf("ctx.Request.URL.Fragment: %v",ctx.Request.URL.Fragment))
		fmt.Println(fmt.Sprintf("ctx.Request.URL.Host: %v",ctx.Request.URL.Host))
		fmt.Println(fmt.Sprintf("ctx.Request.URL.Path: %v",ctx.Request.URL.Path))
		fmt.Println(fmt.Sprintf("ctx.Request.URL.User: %v",ctx.Request.URL.User))
	}
}

