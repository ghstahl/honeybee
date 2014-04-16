/**
 * Created by Herb on 3/25/2014.
 */
require.config({
    baseUrl: '/static/ngApps/2048',
    paths: {
        'angular': '/static/angular/angular-1.2.16/angular',
        'angular-resource': '/static/angular/angular-1.2.16/angular-resource',
        'angular-route': '/static/angular/angular-1.2.16/angular-route',
        'bootstrap': '/static/bootstrap.3.1.1/js/bootstrap.min',
        'jquery': '/static/js/jquery-2.1.0.min',
        'angular_ui_bootstrap': '/static/angular/ui-bootstrap-tpls-0.10.0.min'
    },
    shim: {
        'app': {
            deps: ['angular', 'angular-route', 'angular-resource','bootstrap','angular_ui_bootstrap']
        },
        'angular-route': {
            deps: ['angular']
        },
        'angular_resource': {
            deps: ['angular']
        },
        'angular_ui_bootstrap': {
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