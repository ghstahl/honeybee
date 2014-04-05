package filters

import (
	"os"
	"fmt"
	"io/ioutil"
	"encoding/json"
	"github.com/astaxie/beego"
)

/*
{
    "filters":
    [
        {
            "filter":"UserFilterFunc",
            "pattern":"*",
            "position":"beego.AfterStatic"
        }
    ]
}
*/

type FilterType struct {
	Filter     string
	Pattern string
	Position    string
}
type FilterConfigJsonObject struct {
	Filters   []FilterType
}

type FilterConfigs struct{
	Config FilterConfigJsonObject
	beegoFilterPositionLookup  map[string]int
}

var TheFilterConfigs = &FilterConfigs{

}
func (this *FilterConfigs) initialize() {
	this.beegoFilterPositionLookup = map[string]int{
		"beego.BeforeRouter":beego.BeforeRouter,
		"beego.AfterStatic":beego.AfterStatic,
		"beego.BeforeExec":beego.BeforeExec,
		"beego.AfterExec":beego.AfterExec,
		"beego.FinishRouter":beego.FinishRouter,
	}
}
func (this *FilterConfigs) loadJsonConfig() {
	file, e := ioutil.ReadFile("conf/filterconfigs.json")
	if e != nil {
		fmt.Printf("File error: %v\n", e)
		os.Exit(1)
	}
	fmt.Printf("%s\n", string(file))
	json.Unmarshal(file, &this.Config)
	fmt.Printf("Results: %v\n", this.Config)
}

func (this *FilterConfigs) Load() {
	this.initialize()
	this.loadJsonConfig()

	for _,item:= range this.Config.Filters{
		position := this.beegoFilterPositionLookup[item.Position]
		fmt.Println(fmt.Sprintf("item: %v position: %v",item,position))
		theFilterFunc := TheFilters.FetchFilterFunc(item.Filter)
		beego.InsertFilter(item.Pattern, position,   theFilterFunc)
	}
}
