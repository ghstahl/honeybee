define(['app'], function(app)
{
    app.registerDirective('appDyntemplate',
    [
        '$compile',
        '$http',
        '$templateCache',
        function($compile, $http, $templateCache) {
            var getTemplate = function (content) {
                var templateLoader;

                var templateUrl = app.appGlobal.baseUrl + content.dynTemplate.url;
                console.log('templateUrl:'+templateUrl);
                console.log(templateUrl);

                templateLoader = $http.get(templateUrl, {cache: $templateCache});

                return templateLoader;

            }

            var linker = function (scope, element, attrs) {
                scope.appGlobal = app.appGlobal;
                var loader = getTemplate( scope.content);

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