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
                var templateLoader,
                    baseUrl = '/static/ngApps/3/',
                    templateMap = {
                        notes: 'notes.html',
                        image: 'image.html',
                        video: 'video.html'
                    };

                console.log('myMap['+contentType+']');
                console.log(myMap[contentType]);
                var templateUrl = app.baseUrl + myMap[contentType].url;
                console.log('templateUrl:'+templateUrl);
                console.log(templateUrl);

                templateLoader = $http.get(templateUrl, {cache: $templateCache});

                return templateLoader;

            }

            var linker = function (scope, element, attrs) {
                scope.rootDirectory = app.baseUrl +'images/';
                var loader = getTemplate(scope.post.content_type);

                var promise = loader.success(function (html) {
                    element.html(html);
                }).then(function (response) {
                    element.replaceWith($compile(element.html())(scope));
                });
            }

            return {
                restrict: 'E',
                scope: {
                    post: '='
                },
                link: linker
            };
        }])
});