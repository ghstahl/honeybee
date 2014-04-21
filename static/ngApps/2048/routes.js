/**
 * Created by Herb on 3/25/2014.
 */
define([], function()
{
    var scriptElement = document.querySelector("script[src$='routes.js']");
    var currentScriptPath = scriptElement.src;
    var absoluteBaseUrl = currentScriptPath.substring(0, currentScriptPath.lastIndexOf('/') + 1);
    console.log('absoluteBaseUrl:' + absoluteBaseUrl);

    var parser = document.createElement('a');
    parser.href = absoluteBaseUrl;
    var baseUrl = parser.pathname;
    console.log('baseUrl:' + baseUrl);

    var requireConfig = requirejs.s.contexts._.config;


    console.log("baseUrl:"+baseUrl);
    return {
        baseUrl:baseUrl,
        defaultRoutePath: '/',
        routes: {
            '/': {
                templateUrl: baseUrl + 'views/home.html',
                dependencies: [
                    'controllers/HomeViewController',
                    'directives/app-style',
                    'services/phone',
                    'game/game',
                    'grid/grid',
                    'grid/grid-directives',
                    'keyboard/keyboard'
                ]
            },
            '/about/:person': {
                templateUrl: baseUrl + 'views/about.html',
                dependencies: [
                    'controllers/AboutViewController',
                    'directives/app-color'
                ]
            },
            '/contact': {
                templateUrl: baseUrl + 'views/contact.html',
                dependencies: [
                    'controllers/ContactViewController',
                    'directives/app-color',
                    'directives/app-style'
                ]
            }
        }
    };
});