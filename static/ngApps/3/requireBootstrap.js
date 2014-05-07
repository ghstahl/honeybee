/**
 * Created by Herb on 3/25/2014.
 */
require.config({
    baseUrl: '/static/ngApps/3',
    paths: {
        'angular': '/bower_components/angular/angular',
        'angular-resource': '/bower_components/angular-resource/angular-resource',
        'angular-couch-potato': '/bower_components/angular-couch-potato/dist/angular-couch-potato',
        'angular-cookies': '/bower_components/angular-cookies/angular-cookies',
        'angular-touch': '/bower_components/angular-touch/angular-touch',
        'angular-animate': '/bower_components/angular-animate/angular-animate',
        'angular-route': '/bower_components/angular-route/angular-route',
        'angular-ui-router': '/bower_components/angular-ui-router/release/angular-ui-router',
        'restangular': '/bower_components/restangular/dist/restangular',
        'angular-loading-bar': '/bower_components/angular-loading-bar/build/loading-bar',
        'angular-bootstrap': '/bower_components/angular-bootstrap/ui-bootstrap-tpls.min',
        'underscore':'/bower_components/underscore/underscore'

    },
    shim: {
        'app': {
            deps: [
                'angular',
                'angular-couch-potato',
                'angular-ui-router',
                'angular-route',
                'angular-loading-bar',
                'angular-resource',
                'angular-touch',
                'angular-cookies',
                'angular-animate',
                'angular-bootstrap',
                'restangular',
                'underscore'
            ]
        },
        'angular-couch-potato': {
            deps: ['angular-ui-router','angular']
        },
        'angular-loading-bar': {
            deps: ['angular']
        },
        'restangular': {
            deps: ['angular','underscore']
        },
        'angular-ui-router': {
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
        'angular-bootstrap': {
            deps: ['angular']
        }

    }

});

require
(
    [
        'app', 'app-init'
    ],
    function(app)
    {
//        angular.bootstrap(document, ['app']);

        angular.element(document).ready(function() {

            angular.bootstrap(document, [app['name'], function() {

                // for good measure, put ng-app on the html element
                // studiously avoiding jQuery because angularjs.org says we shouldn't
                // use it.  In real life, there are a ton of reasons to use it.
                // karma likes to have ng-app on the html element when using requirejs.
                angular.element(document).find('html').addClass('ng-app');

            }]);

        });
    }
);

