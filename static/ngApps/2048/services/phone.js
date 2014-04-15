/**
 * Created by Herb on 3/25/2014.
 */
define(['app'], function(app){
    app.factory('Phone',
        ['$resource', function($resource){
                return $resource('/static/ngApps/2048/phones/:phoneId.json?', {}, {
                    query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
                });
            }
        ]);
});
