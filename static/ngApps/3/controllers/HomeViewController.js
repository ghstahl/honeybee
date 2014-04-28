/**
 * Created by Herb on 3/25/2014.
 */
define(['app'], function(app)
{
    app.controller('HomeViewController',
        [
            '$scope',
            '$http',

            function($scope,$http)
            {
                $scope.appGlobal = app.appGlobal;

                $scope.page =
                {
                    heading: '3 Welcome'
                };
                $scope.url = '/static/ngApps/3/content.json';
                $scope.content = [];

                $scope.fetchContent = function() {
                    $http.get($scope.url).then(function(result){
                        $scope.content = result.data;
                    });
                }
                $scope.fetchContent();
            }
        ]);
});