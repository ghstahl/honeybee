/**
 * Created by Herb on 3/25/2014.
 */
define(['app'], function(app)
{
    app.controller('HomeViewController',
        [
            '$scope',

            function($scope)
            {
                $scope.page =
                {
                    heading: 'Welcome'
                };
            }
        ]);
});