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
    app.registerController('AboutView1Controller',
        [            '$scope', '$stateParams','formId',
            function ($scope,   $stateParams , formId) {
                $scope.appGlobal = app.appGlobal;

                $scope.page =
                {
                    heading: 'View1'
                };
                var accountManagementConfig = $scope.accountManagementConfig;
                angular.forEach(accountManagementConfig, function (form) {
                    if (form.id == formId){
                        $scope.content = form;

                    }
                });
            }
        ]);
});