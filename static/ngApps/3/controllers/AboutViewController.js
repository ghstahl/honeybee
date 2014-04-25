/**
 * Created by Herb on 3/25/2014.
 */
define(['app'], function(app)
{
    app.controller('AboutViewController',
        [
            '$scope',

            function($scope)
            {
                $scope.page =
                {
                    heading: '3 About Us'
                };
            }
        ]);
});