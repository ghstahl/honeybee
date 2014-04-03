/**
 * Created by Herb on 3/25/2014.
 */
require.config({
    baseUrl: '/static/ngApps/2',
    paths: {
        'angular': '/static/angular/angular-1.3.0-beta3/angular',
        'angular-route': '/static/angular/angular-1.3.0-beta3/angular-route',
        'bootstrap': '/static/bootstrap.3.1.1/js/bootstrap.min',
        'jquery': '/static/js/jquery-2.1.0.min',
        'lodash': '/static/lodash/2.4.1/dist/lodash.min',
        'angular-wizard': '/static/mgonto/angular-wizard.0.3.1/dist/angular-wizard'
    },
    shim: {
        'app': {
            deps: ['angular', 'angular-route', 'bootstrap']
        },
        'angular-route': {
            deps: ['angular']
        },
        'bootstrap': {
            deps: ['jquery']
        },
        'angular-wizard': {
            deps: ['lodash']
        }
    },
    customConfig:{
        baseRouteUrl:"/AngularWizard/Home/Index"
    }
});

require
(
    [
        'app'
    ],
    function(app)
    {
        angular.bootstrap(document, ['app']);
    }
);