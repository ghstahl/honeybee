/**
 * Created by Herb on 3/25/2014.
 */
require.config({
    baseUrl: '/static/ngApps/3',
    paths: {
        'angular': '/bower_components/angular/angular',
        'angular-resource': '/bower_components/angular-resource/angular-resource',
        'angular-cookies': '/bower_components/angular-cookies/angular-cookies',
        'angular-touch': '/bower_components/angular-touch/angular-touch',
        'angular-animate': '/bower_components/angular-animate/angular-animate',
        'angular-route': '/bower_components/angular-route/angular-route',
        'bootstrap': '/bower_components/bootstrap/dist/js/bootstrap.min',
        'jquery': '/bower_components/jquery/dist/jquery.min',
        'restangular': '/bower_components/restangular/dist/restangular',
        'angular-loading-bar': '/bower_components/angular-loading-bar/build/loading-bar',
        'angular-bootstrap': '/bower_components/angular-bootstrap/ui-bootstrap-tpls.min',
        'underscore':'/bower_components/underscore/underscore'
    },
    shim: {
        'app': {
            deps: [
                'angular',
                'angular-route',
                'angular-loading-bar',
                'angular-resource',
                'angular-touch',
                'angular-cookies',
                'angular-animate',
                'angular-bootstrap',
                'bootstrap',
                'restangular',
                'underscore'
            ]
        },
        'angular-loading-bar': {
            deps: ['angular']
        },
        'restangular': {
            deps: ['angular','underscore']
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
        'angular-bootstrap': {
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