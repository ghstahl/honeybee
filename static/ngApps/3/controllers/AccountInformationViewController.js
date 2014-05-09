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
        'AccountInformationViewController',
        [            '$scope', '$stateParams', 'accountManagementConfig','dynTemplateFactoryConfig','formId',
            function ($scope,   $stateParams,   accountManagementConfig,dynTemplateFactoryConfig,formId) {
                $scope.view = 'MyAccountViewController says hi.. ';
                $scope.content = [];

                $scope.page =
                {
                    heading: 'My Account Information'
                };

                $scope.appGlobal = app.appGlobal;
                $scope.dynTemplates = dynTemplateFactoryConfig;
           //     $scope.content = accountManagementConfig;
          //      var record = {};
                accountManagementConfig.forEach(function(entry) {
                    var rec = $scope.dynTemplates[entry.content_type];
                    entry.dynTemplate = rec;

                });
                
                angular.forEach(accountManagementConfig, function (form) {
                    if (form.id == formId){
                        $scope.content = form;

                    }
                });

            }
        ]);
});