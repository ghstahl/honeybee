/**
 * Created by Herb on 3/25/2014.
 */
define(['app'], function(app)
{
    app.directive('appColor',
        [
            function()
            {
                return function(scope, $element, attrs)
                {
                    $element.css({'color': attrs.appColor});
                }
            }
        ])
});
