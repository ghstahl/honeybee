package filters

import (
	"github.com/astaxie/beego/context"
	"fmt"
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/middleware"
	"github.com/ghstahl/pingbeego/reflection"
	"reflect"

	"net/url"
	"net/http"
)

type AuthFilterType struct {
}

type AuthApiFilterType struct {
}

func (v AuthFilterType) FilterFunc() beego.FilterFunc{
	return func(ctx *context.Context) {

		if ctx.Request.URL.User == nil{
			// need to redirect
			fmt.Println(fmt.Sprintf("ctx.Request.URL: %v",ctx.Request.URL))
			fmt.Println(fmt.Sprintf("ctx.Request.URL.RequestURI: %v",ctx.Request.URL.RequestURI()))
			fmt.Println(fmt.Sprintf("ctx.Request.URL.Opaque: %v",ctx.Request.URL.Opaque))
			fmt.Println(fmt.Sprintf("ctx.Request.URL.RawQuery: %v",ctx.Request.URL.RawQuery))
			fmt.Println(fmt.Sprintf("ctx.Request.URL.Fragment: %v",ctx.Request.URL.Fragment))
			fmt.Println(fmt.Sprintf("ctx.Request.URL.Host: %v",ctx.Request.URL.Host))
			fmt.Println(fmt.Sprintf("ctx.Request.URL.Path: %v",ctx.Request.URL.Path))
			fmt.Println(fmt.Sprintf("ctx.Request.URL.User: %v",ctx.Request.URL.User))

			returnUrl := url.QueryEscape(ctx.Request.URL.RequestURI())
			loginUrl := fmt.Sprintf("/auth/login?returnUrl=%s", returnUrl)
			fmt.Println(fmt.Sprintf("loginUrl: %v",loginUrl))
			ctx.Redirect(http.StatusSeeOther,loginUrl)
		}
	}
}
func (v AuthApiFilterType) FilterFunc() beego.FilterFunc{
	return func(ctx *context.Context) {

		if ctx.Request.URL.User == nil{
			// need to redirect
			fmt.Println(fmt.Sprintf("ctx.Request.URL: %v",ctx.Request.URL))
			fmt.Println(fmt.Sprintf("ctx.Request.URL.RequestURI: %v",ctx.Request.URL.RequestURI()))
			fmt.Println(fmt.Sprintf("ctx.Request.URL.Opaque: %v",ctx.Request.URL.Opaque))
			fmt.Println(fmt.Sprintf("ctx.Request.URL.RawQuery: %v",ctx.Request.URL.RawQuery))
			fmt.Println(fmt.Sprintf("ctx.Request.URL.Fragment: %v",ctx.Request.URL.Fragment))
			fmt.Println(fmt.Sprintf("ctx.Request.URL.Host: %v",ctx.Request.URL.Host))
			fmt.Println(fmt.Sprintf("ctx.Request.URL.Path: %v",ctx.Request.URL.Path))
			fmt.Println(fmt.Sprintf("ctx.Request.URL.User: %v",ctx.Request.URL.User))
			middleware.Unauthorized(ctx.ResponseWriter,ctx.Request);
		}
	}
}

func init() {
	var x AuthFilterType
	reflection.TheReflectRepository.ValueRepository["AuthFilterType"] = reflect.ValueOf(x)
	reflection.TheReflectRepository.TypeRepository["AuthFilterType"] = reflect.TypeOf(x)

	var xapi AuthApiFilterType
	reflection.TheReflectRepository.ValueRepository["AuthApiFilterType"] = reflect.ValueOf(xapi)
	reflection.TheReflectRepository.TypeRepository["AuthApiFilterType"] = reflect.TypeOf(xapi)
}

