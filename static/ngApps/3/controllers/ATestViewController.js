define(['app'], function (app) {
    app.registerController(
        'ATestViewController',
        [        '$scope', '$state','$stateParams',
            function ($scope,   $state,  $stateParams) {

                $scope.formData = {};
                console.log($scope.view);
                $scope.test = "ATestViewController says hi..";
                $scope.submit = function(){
                    alert('Form submitted..');
                    $scope.form.submitted = true;
                }

                $scope.cancel = function(){
                    alert('Form canceled..');
                }

            }]
    );
});
