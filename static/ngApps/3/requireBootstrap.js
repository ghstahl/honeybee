/**
 * Created by Herb on 3/25/2014.
 */
require.config({
    baseUrl: '/static/ngApps/3',
    paths: {
        'angular': '/static/angular/angular-1.2.16/angular',
        'angular-resource': '/static/angular/angular-1.2.16/angular-resource',
        'angular-cookies': '/static/angular/angular-1.2.16/angular-cookies',
        'angular-touch': '/static/angular/angular-1.2.16/angular-touch',
        'angular-animate': '/static/angular/angular-1.2.16/angular-animate',
        'angular-route': '/static/angular/angular-1.2.16/angular-route',
        'bootstrap': '/static/bootstrap.3.1.1/js/bootstrap.min',
        'jquery': '/static/js/jquery-2.1.0.min',
        'restangular': '/static/restangular/dist/restangular',
        'ui-bootstrap-tpls': '/static/angular/ui-bootstrap-tpls-0.10.0.min'
    },
    shim: {
        'app': {
            deps: ['angular',
                'angular-route',
                'angular-resource',
                'angular-touch',
                'angular-cookies',
                'angular-animate',
                'ui-bootstrap-tpls',
                'bootstrap',
                'restangular']
        },
        'restangular': {
            deps: ['angular']
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
        'ui-bootstrap-tpls': {
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