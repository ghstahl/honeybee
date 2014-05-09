/**
 * Created by Herb on 3/25/2014.
 */
define([
        'app',
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
    ], function(app)
{
    app.registerController('AboutViewController',
        [            '$scope', '$stateParams', 'accountManagementConfig','dynTemplateFactoryConfig',
            function ($scope,   $stateParams,   accountManagementConfig ,dynTemplateFactoryConfig) {

                $scope.appGlobal = app.appGlobal;

                $scope.page =
                {
                    heading: '3 About Us'
                };
                $scope.content = {};
                $scope.dynTemplates = dynTemplateFactoryConfig;
                //     $scope.content = accountManagementConfig;
                //      var record = {};
                accountManagementConfig.forEach(function(entry) {
                    var rec = $scope.dynTemplates[entry.content_type];
                    entry.dynTemplate = rec;

                });
                $scope.accountManagementConfig = accountManagementConfig;


            }
        ]);
});