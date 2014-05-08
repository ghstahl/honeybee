/**
 * Created by Herb on 3/25/2014.
 */

'use strict';

define(['app'], function(app){
    app.registerService('AccountManagementService',
        [
            '$q',
            '$resource',
            function($q,$resource){

                var url = app.appGlobal.baseUrl + 'data/accountManagementContent.json';
                return {

                    form:function (id) {
                        var deferred = $q.defer();
                        var myRes = $resource(url, {}, {
                            query: {method:'GET',  isArray:true}
                        });
                        var myPromise =myRes.query().$promise;
                        myPromise.then(function (response) {
                            angular.forEach(response, function (form) {
                                if (form.id == id){
                                    deferred.resolve(form);
                                }
                            });
                        });
                        return deferred.promise;
                    },
                    forms: function() {
                        var myRes = $resource(url, {}, {
                            query: {method:'GET',  isArray:true}
                        });
                        return myRes.query().$promise;
                    }
                };
            }
        ]
    );
});



