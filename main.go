package main

import (
	_ "honeybee/routers"
	"honeybee/beegoapp"
)

func main() {
	beegoapp.TheApp.Initialize()
	beegoapp.TheApp.Run()
}

