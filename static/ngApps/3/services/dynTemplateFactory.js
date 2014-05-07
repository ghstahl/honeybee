/**
 * Created by Herb on 3/25/2014.
 */
define(['app'], function(app){
    app.registerFactory(
        'DynTemplateFactory',
        [
            '$resource',
            function($resource){
                var url = app.appGlobal.baseUrl + 'dyntemplates/:dyntemplateId.json?';
                return $resource(url, {}, {
                    query: {method:'GET', params:{dyntemplateId:'dyntemplates'}, isArray:false}
                });
            }
        ]);
});

