'use strict';

define(['app'], function(app)
{
    app.registerDirective('formDirective',
    [
        function() {
            var templateBaseUrl = app.appGlobal.baseUrl + 'templates/dynform/form/';
            var controllerfunc = function(scope){
                scope.submit = function(){
                    alert('Form submitted..');
                    scope.form.submitted = true;
                }

                scope.cancel = function(){
                    alert('Form canceled..');
                }
            }
            return {
                controller: controllerfunc,
                templateUrl: templateBaseUrl + 'form.html',
                restrict: 'E',
                scope: {
                    form:'='
                }
            };
        }
    ])
});

