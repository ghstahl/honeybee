/**
 * Created by Herb on 3/25/2014.
 */
require.config({
    baseUrl: '/static/ngApps/2048',
    paths: {
        'angular': '/static/angular/angular-1.2.16/angular',
        'angular-resource': '/static/angular/angular-1.2.16/angular-resource',
        'angular-animate': '/static/angular/angular-1.2.16/angular-animate',
        'angular-route': '/static/angular/angular-1.2.16/angular-route',
        'bootstrap': '/static/bootstrap.3.1.1/js/bootstrap.min',
        'jquery': '/static/js/jquery-2.1.0.min',
        'angular-ui-bootstrap': '/static/angular/ui-bootstrap-tpls-0.10.0.min'
    },
    shim: {
        'app': {
            deps: ['angular', 'angular-route', 'angular-resource','bootstrap','angular-ui-bootstrap']
        },
        'angular-route': {
            deps: ['angular']
        },
        'angular-resource': {
            deps: ['angular']
        },
        'angular-animate': {
            deps: ['angular']
        },
        'angular-ui-bootstrap': {
            deps: ['angular']
        },
        'bootstrap': {
            deps: ['jquery']
        }
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