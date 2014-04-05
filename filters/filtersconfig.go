package filters

import (
	"os"
	"fmt"
	"io/ioutil"
	"encoding/json"
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
}
var TheFilterConfigs = &FilterConfigs{}

func (this *FilterConfigs) Load() {
	file, e := ioutil.ReadFile("conf/filterconfigs.json")
	if e != nil {
		fmt.Printf("File error: %v\n", e)
		os.Exit(1)
	}
	fmt.Printf("%s\n", string(file))
	json.Unmarshal(file, &this.Config)
	fmt.Printf("Results: %v\n", this.Config)
}
