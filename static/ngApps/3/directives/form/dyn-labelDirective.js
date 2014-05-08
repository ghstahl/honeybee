'use strict';

define(['app'], function(app)
{
    app.registerDirective('dynLabel',
    [

        function () {
            var templateUrl = app.appGlobal.baseUrl + 'templates/dynform/dynLabel.html';
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

