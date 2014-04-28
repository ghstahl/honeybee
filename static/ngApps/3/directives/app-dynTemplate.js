define(['app'], function(app)
{
    app.directive('appDyntemplate',
    [
        '$compile',
        '$http',
        '$templateCache',
        'DynTemplateFactory',
        function($compile, $http, $templateCache,DynTemplateFactory) {
            var myMap = DynTemplateFactory.query();
            var getTemplate = function (contentType) {
                var templateLoader;

                console.log('myMap['+contentType+']');
                console.log(myMap[contentType]);
                var templateUrl = app.appGlobal.baseUrl + myMap[contentType].url;
                console.log('templateUrl:'+templateUrl);
                console.log(templateUrl);

                templateLoader = $http.get(templateUrl, {cache: $templateCache});

                return templateLoader;

            }

            var linker = function (scope, element, attrs) {
                scope.appGlobal = app.appGlobal;
                var loader = getTemplate(scope.content.content_type);

                var promise = loader.success(function (html) {
                    element.html(html);
                }).then(function (response) {
                    element.replaceWith($compile(element.html())(scope));
                });
            }

            return {
                restrict: 'E',
                scope: {
                    content: '='
                },
                link: linker
            };
        }])
});