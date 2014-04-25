/**
 * Created by Herb on 3/25/2014.
 */
define(['app'], function(app)
{
    app.controller('HomeViewController',
        [
            '$scope',
            'DynTemplateFactory',

            function($scope,DynTemplateFactory)
            {
                $scope.page =
                {
                    heading: '3 Welcome'
                };
                $scope.templates = DynTemplateFactory.query();
            }
        ]);
});