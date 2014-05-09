/**
 * Created by Herb on 3/25/2014.
 */
define([
        'app',
        'directives/app-color',
        'directives/app-style',
        'directives/app-weight'
    ], function(app)
{
    app.registerController('AboutViewController',
        [
            '$scope',

            function($scope)
            {
                $scope.appGlobal = app.appGlobal;

                $scope.page =
                {
                    heading: '3 About Us'
                };
            }
        ]);
});