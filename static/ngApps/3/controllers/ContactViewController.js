/**
 * Created by Herb on 3/25/2014.
 */
define(['app'], function(app)
{
    app.controller('ContactViewController',
        [
            '$scope', '$http','Restangular','AccountManagementFactory',
            function($scope,$http,Restangular,AccountManagementFactory)
            {
                $scope.appGlobal = app.appGlobal;
                $scope.content = AccountManagementFactory.query();

                $scope.page =
                {
                    heading: ' 3 Contact Us'
                };
                $scope.oneAtATime = true;

                $scope.items = ['Item 1', 'Item 2', 'Item 3'];

            }
        ]);
});