define(['app'], function (app) {
    app.registerController(
        'ATestViewController',
        [        '$scope', '$state','$stateParams',
            function ($scope,   $state,  $stateParams) {


                console.log($scope.view);
                $scope.test = "ATestViewController says hi..";


            }]
    );
});
