/**
 * Created by Herb on 3/25/2014.
 */
define(['app'], function(app){
    app.factory('AccountManagementFactory',
        [
            '$resource',
            function($resource){
                var url = app.appGlobal.baseUrl + 'accountManagementContent.json';
                return $resource(url, {}, {
                    query: {method:'GET',  isArray:true}
                });
            }
        ]);
});
