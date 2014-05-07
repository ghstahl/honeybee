/**
 * Created by Herb on 3/25/2014.
 */
define(
[
    'angular-couch-potato',
    'routes',
    'services/dependencyResolverFor'
],
function(
    couchPotato,
    config,
    dependencyResolverFor)
{
    var app = angular.module('app',
        [
            'scs.couch-potato',
            'ui.router',
            'ui.bootstrap',
            'ngAnimate',
            'restangular',
            'ngRoute',
            'ngResource',
            'chieffancypants.loadingBar'
        ]);

    couchPotato.configureApp(app);

    app.appGlobal = {
        baseUrl:'/static/ngApps/3/'
    };

    return app;
});