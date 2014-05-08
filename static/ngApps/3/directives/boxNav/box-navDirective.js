'use strict';

define(['app'], function(app)
{
    app.registerDirective('boxNav',
    [

        function () {
            var templateUrl = app.appGlobal.baseUrl + 'templates/boxNav/boxWidget.html';
            return {
                restrict: 'E',
                templateUrl: templateUrl,
                scope: {
                    field:'='
                }
            };
        }
    ])
});

