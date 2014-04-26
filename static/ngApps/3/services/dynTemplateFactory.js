/**
 * Created by Herb on 3/25/2014.
 */
define(['app'], function(app){
    app.factory('DynTemplateFactory',
        [
            '$resource',
            function($resource){
                return $resource('/static/ngApps/3/dyntemplates/:dyntemplateId.json?', {}, {
                    query: {method:'GET', params:{dyntemplateId:'dyntemplates'}, isArray:false}
                });
            }
        ]);
});
