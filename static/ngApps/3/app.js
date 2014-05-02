/**
 * Created by Herb on 3/25/2014.
 */
define(['angular-couch-potato','routes','services/dependencyResolverFor'], function(couchPotato,config, dependencyResolverFor)
{
    var app = angular.module('app',
        [
            'ngRoute',
            'ui.bootstrap',
            'scs.couch-potato',
            'ngResource',
            'chieffancypants.loadingBar',
            'ngAnimate',
            'restangular',
            'ui.router'
        ]);
    couchPotato.configureApp(app);
    app.appGlobal = {
        baseUrl:'/static/ngApps/3/'
    };
    app.config(
        [
            '$stateProvider',
            '$urlRouterProvider',
            '$routeProvider',
            '$locationProvider',
            '$controllerProvider',
            '$compileProvider',
            '$filterProvider',
            '$provide',


            function($stateProvider,
                     $urlRouterProvider,
                     $routeProvider,
                     $locationProvider,
                     $controllerProvider,
                     $compileProvider,
                     $filterProvider,
                     $provide)
            {
                app.controller = $controllerProvider.register;
                app.directive  = $compileProvider.directive;
                app.filter     = $filterProvider.register;
                app.factory    = $provide.factory;
                app.service    = $provide.service;

                $locationProvider.html5Mode(false);

                if(config.routes !== undefined)
                {
                    angular.forEach(config.routes, function(route, path)
                    {
                        $routeProvider.when(path, {templateUrl:route.templateUrl, resolve:dependencyResolverFor(route.dependencies)});
                    });
                }

                if(config.defaultRoutePaths !== undefined)
                {
                    $routeProvider.otherwise({redirectTo:config.defaultRoutePaths});
                }
            }
        ]);
        app.run(['$couchPotato', '$state', '$stateParams', '$rootScope',
            function($couchPotato, $state, $stateParams, $rootScope){
                // by assigning the couchPotato service to the lazy property, we
                // the register functions will know to run-time-register components
                // instead of config-time-registering them.
                app.lazy = $couchPotato;

                // angular-ui-project recommends assigning these services to the root
                // scope.  Others have argued that doing so can lead to obscured
                // dependencies and that making services directly available to html and
                // directives is unclean.  In any case, the ui-router demo assumes these
                // are available in the DOM, therefore they should be on $rootScope.
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
            }])


    return app;
});