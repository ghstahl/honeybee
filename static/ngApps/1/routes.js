/**
 * Created by Herb on 3/25/2014.
 */
define([], function()
{
    var scriptElement = document.querySelector("script[src$='routes.js']");
    var currentScriptPath = scriptElement.src;
    console.log("currentScriptPath:"+currentScriptPath);
    var baseUrl = currentScriptPath.substring(0, currentScriptPath.lastIndexOf('/') + 1);
    console.log("baseUrl:"+baseUrl);
    return {
        defaultRoutePath: '/',
        routes: {
            '/': {
                templateUrl: baseUrl + 'views/home.html',
                dependencies: [
                    'controllers/HomeViewController',
                    'directives/app-style'
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