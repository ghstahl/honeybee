package filters

import (
	"github.com/astaxie/beego"
	"reflect"
)

// a place to park all the filter functions.
// we do this so that we can find them via reflection

type Filters struct{
}
var TheFilters Filters

func (this *Filters) FetchFilterFunc( name string ) beego.FilterFunc{

	filterMethodVal := reflect.ValueOf(this).MethodByName(name)
	// turn that into an interface{}
	filterMethodIface := filterMethodVal.Interface()
	// turn that into a function that has the expected signature
	filterMethod := filterMethodIface.(func() beego.FilterFunc)
	// call the method directly
	theFunc := filterMethod()
	return theFunc
}


