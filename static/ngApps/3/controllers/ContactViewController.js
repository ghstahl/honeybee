/**
 * Created by Herb on 3/25/2014.
 */



define(['app',
    'services/accountManagementFactory',
    'services/dynTemplateFactory',
    'services/templateProviderFactory',
    'filters/style-switch',
    'directives/app-color',
    'directives/app-style',
    'directives/app-weight',
    'directives/app-dynTemplate',
    'directives/form/dyn-labelDirective',
    'directives/form/dyn-fieldDirective',
    'directives/form/dyn-formDirective'
], function (app) {
    app.registerController(
        'ContactViewController',
        [            '$scope', '$stateParams', 'accountManagementConfig','dynTemplateFactoryConfig',
            function ($scope,   $stateParams,   accountManagementConfig,  dynTemplateFactoryConfig) {
                $scope.view = 'ContactViewController says hi.. ';
                $scope.content = [];

                $scope.page =
                {
                    heading: ' 3 Contact Us'
                };
                $scope.oneAtATime = true;

                $scope.items = ['Item 1', 'Item 2', 'Item 3'];

                $scope.appGlobal = app.appGlobal;
                $scope.content = accountManagementConfig;
                $scope.dynTemplates = dynTemplateFactoryConfig;

                $scope.content.forEach(function(entry) {
                    var rec = $scope.dynTemplates[entry.content_type];
                    entry.dynTemplate = rec;

                });
                $scope.submit = function(){
                    alert('Form submitted..');
                    $scope.form.submitted = true;
                }

                $scope.cancel = function(){
                    alert('Form canceled..');
                }

            }
        ]);
});
