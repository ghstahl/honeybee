/**
 * Created by Herb on 3/25/2014.
 */
define(['app'], function(app)
{
    app.directive('grid',
        [
            function() {
                return {
                    restrict: 'A',
                    require: 'ngModel',
                    scope: {
                        ngModel: '='
                    },
                    templateUrl: 'grid/grid.html'
                };
            }
        ])
});
