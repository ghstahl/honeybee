/**
 * Created by Herb on 3/25/2014.


 This does return the template, but the stateprovider.templateProvider doesn't like it.

 templateProvider:
 [        'TemplateProviderFactory',
 function (TemplateProviderFactory) {
                            TemplateProviderFactory.getTemplateContent( app.appGlobal.baseUrl +  'views/contact.html');
                        }],//                templateUrl: app.appGlobal.baseUrl +  'views/contact.html',
 templateUrl: app.appGlobal.baseUrl +  'views/contact.html',

 */


define(['app'], function(app){
    app.registerFactory(
        'TemplateProviderFactory',
        [
                    '$http',   '$q','$templateCache',
            function($http,     $q,  $templateCache){
                return {
                    getTemplateContent: function(url) {
                        // the $http API is based on the deferred/promise APIs exposed by the $q service
                        // so it returns a promise for us by default
                        return $http.get(url, { cache: $templateCache })
                            .then(function(response) {
                                if (typeof response.data === 'string') {
                                    return response.data;
                                } else {
                                    // invalid response
                                    return $q.reject(response.data);
                                }
                            }, function(response) {
                                // something went wrong
                                return $q.reject(response.data);
                            });
                    }
                };
            }
        ]);
});



