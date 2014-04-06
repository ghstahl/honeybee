package filters

import (
	"github.com/astaxie/beego/context"
	"fmt"
	"github.com/astaxie/beego"
	"github.com/ghstahl/pingbeego/reflection"
	"reflect"
)

type UserFilterType struct {
}

func (v UserFilterType) FilterFunc() beego.FilterFunc{
	return func(ctx *context.Context) {
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

func init() {
	var x UserFilterType
	reflection.TheReflectRepository.ValueRepository["UserFilterType"] = reflect.ValueOf(x)
	reflection.TheReflectRepository.TypeRepository["UserFilterType"] = reflect.TypeOf(x)
}

