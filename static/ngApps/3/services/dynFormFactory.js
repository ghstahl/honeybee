/**
 * Created by Herb on 3/25/2014.
 */
define(['app'], function(app){
    app.registerFactory(
        'DynFormFactory',
        [
            '$resource',
            function($resource){
                var url = app.appGlobal.baseUrl + 'sample_forms_1.json';
                return $resource(url, {}, {
                    query: {method:'GET',  isArray:false}
                });
            }
        ]);
});
