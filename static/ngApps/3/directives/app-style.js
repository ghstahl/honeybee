/**
 * Created by Herb on 3/25/2014.
 */
define(['app'], function(app)
{
    app.directive('appStyle',
        [
            function()
            {
                return function(scope, $element, attrs)
                {
                    $element.css({'font-style': attrs.appStyle});
                }
            }
        ])
});