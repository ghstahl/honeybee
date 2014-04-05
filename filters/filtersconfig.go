package filters

import (
	"os"
	"fmt"
	"io/ioutil"
)

type FilterConfigs struct{

}
var TheFilterConfigs = &FilterConfigs{}

func (this *FilterConfigs) Load() {
	file, e := ioutil.ReadFile("conf/filterconfigs.json")
	if e != nil {
		fmt.Printf("File error: %v\n", e)
		os.Exit(1)
	}
	fmt.Printf("%s\n", string(file))
}
