/**
 * Created by Herb on 3/25/2014.
 */
define([], function()
{
    return function(dependencies,factoryName) {

        require(dependencies,
            [
                factoryName,
                function ($q, $rootScope, factory) {
                    return factory.query();
                }
            ]);
    }
});