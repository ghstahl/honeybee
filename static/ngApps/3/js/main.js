/**
 * Created by Herb on 3/23/2014.
 */
var app = angular.module("myApp",['ngRoute']);
app.config(function($routeProvider){
    $routeProvider.when('/',{
        templateUrl:"templates/home.html",
        controller: 'HomeController'
    })
    .otherwise({redirectTo:'/'});
});

app.controller('HomeController',function(){

});