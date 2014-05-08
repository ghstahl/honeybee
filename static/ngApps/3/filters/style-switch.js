/**
 * Created by Herb on 3/25/2014.
 */
define(['app'], function(app)
{
    app.registerFilter('switch',
        [
            function()
            {
                return function (input, map) {
                    return map[input] || '';
                };
            }
        ])
});
