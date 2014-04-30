package main

import (
	_ "github.com/ghstahl/honeybee/routers"
	"github.com/ghstahl/honeybee/beegoapp"
)

func main() {
	beegoapp.TheApp.Initialize()
	beegoapp.TheApp.Run()
}

