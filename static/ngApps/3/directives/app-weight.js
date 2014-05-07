/**
 * Created by Herb on 3/25/2014.
 */
define(['app'], function(app)
{
    app.registerDirective('appWeight',
        [
            function()
            {
                return function(scope, $element, attrs)
                {
                    $element.css({'font-weight': attrs.appWeight});
                }
            }
        ])
});