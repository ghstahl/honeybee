/**
 * Created by Herb on 3/25/2014.
 */
define(['app'], function(app){
    app.registerFactory(
        'MyAccountBoxNavFactory',
        [
            '$resource',
            function($resource){
                var url = app.appGlobal.baseUrl + 'myAccountBoxNav.json';
                return $resource(url, {}, {
                    query: {method:'GET',  isArray:true}
                });
            }
        ]);
});



