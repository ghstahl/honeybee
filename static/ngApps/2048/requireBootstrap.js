/**
 * Created by Herb on 3/25/2014.
 */
require.config({
    baseUrl: '/static/ngApps/2048',
    paths: {
        'angular': '/static/angular/angular-1.3.0-beta.5/angular',
        'angular-resource': '/static/angular/angular-1.3.0-beta.5/angular-resource',
        'angular-cookies': '/static/angular/angular-1.3.0-beta.5/angular-cookies',
        'angular-touch': '/static/angular/angular-1.3.0-beta.5/angular-touch',
        'angular-animate': '/static/angular/angular-1.3.0-beta.5/angular-animate',
        'angular-route': '/static/angular/angular-1.3.0-beta.5/angular-route',
        'bootstrap': '/static/bootstrap.3.1.1/js/bootstrap.min',
        'jquery': '/static/js/jquery-2.1.0.min',
        'angular-ui-bootstrap': '/static/angular/ui-bootstrap-tpls-0.10.0.min'
    },
    shim: {
        'app': {
            deps: ['angular',
                'angular-route',
                'angular-resource',
                'angular-touch',
                'angular-cookies',
                'angular-animate',
                'angular-ui-bootstrap',
                'bootstrap']
        },
        'angular-route': {
            deps: ['angular']
        },
        'angular-resource': {
            deps: ['angular']
        },
        'angular-touch': {
            deps: ['angular']
        },
        'angular-cookies': {
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