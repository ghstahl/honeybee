/**
 * Created by Herb on 3/25/2014.
 */



define(['app',
    'services/myAccountBoxNavFactory',
    'directives/boxNav/box-navDirective'
], function (app) {
    app.registerController(
        'MyAccountViewController',
        [            '$scope', '$stateParams', 'myAccountBoxNavConfig',
            function ($scope,   $stateParams,   myAccountBoxNavConfig) {
                $scope.view = 'MyAccountViewController says hi.. ';
                $scope.content = [];

                $scope.page =
                {
                    heading: 'My Account'
                };

                $scope.appGlobal = app.appGlobal;
                $scope.content = myAccountBoxNavConfig;
            }
        ]);
});
