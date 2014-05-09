/**
 * Created by Herb on 3/25/2014.
 */
define([
        'app'
    ], function(app)
{
    app.registerController('AboutView2Controller',
        [            '$scope', '$stateParams','formId',
            function ($scope,   $stateParams , formId) {


                $scope.page =
                {
                    heading: 'View2'
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