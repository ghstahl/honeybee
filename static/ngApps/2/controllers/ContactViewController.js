/**
 * Created by Herb on 3/25/2014.
 */
define(['app'], function(app)
{
    app.controller('ContactViewController',
        [
            '$scope',

            function($scope)
            {
                $scope.page =
                {
                    heading: 'Contact Us'
                };
            }
        ]);
});