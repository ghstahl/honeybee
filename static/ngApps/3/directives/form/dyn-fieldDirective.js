'use strict';

define(['app'], function(app)
{
    app.directive('fieldDirective',
    [
        '$http','$compile',
        function ($http, $compile) {
            var templateBaseUrl = app.appGlobal.baseUrl + 'templates/dynform/field/';
            console.log("fieldDirective == templateBaseUrl:" + templateBaseUrl);
            var getTemplateUrl = function(field) {
                var type = field.field_type;
                var templateUrl = '';

                switch(type) {
                    case 'textfield':
                        templateUrl = 'textfield.html';
                        break;
                    case 'email':
                        templateUrl = 'email.html';
                        break;
                    case 'textarea':
                        templateUrl = 'textarea.html';
                        break;
                    case 'checkbox':
                        templateUrl = 'checkbox.html';
                        break;
                    case 'date':
                        templateUrl = 'date.html';
                        break;
                    case 'dropdown':
                        templateUrl = 'dropdown.html';
                        break;
                    case 'hidden':
                        templateUrl = 'hidden.html';
                        break;
                    case 'password':
                        templateUrl = 'password.html';
                        break;
                    case 'radio':
                        templateUrl = 'radio.html';
                        break;
                }
                var finalTemplateUrl = templateBaseUrl + templateUrl;
                console.log("finalTemplateUrl:" + finalTemplateUrl);
                return finalTemplateUrl;
            }

            var linker = function(scope, element) {
                // GET template content from path
                var templateUrl = getTemplateUrl(scope.field);
                console.log("templateUrl:" + templateUrl);
                $http.get(templateUrl).success(function(data) {
                    element.html(data);
                    $compile(element.contents())(scope);
                });
            }

            return {
                template: '<div>{{field}}</div>',
                restrict: 'E',
                scope: {
                    field:'='
                },
                link: linker
            };
        }
    ])
});
