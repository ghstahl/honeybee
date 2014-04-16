/**
 * Created by Herb on 3/25/2014.
 */
define(['app'], function(app)
{
    app.controller('HomeViewController',
        [
            '$scope',
            'Phone',
            'GameManager',
            'KeyboardService',

            function($scope,Phone,GameManager,KeyboardService)
            {
                $scope.page =
                {
                    heading: 'Welcome',
                    currentScore: 1024,
                    highScore: 2048
                };
                $scope.phones = Phone.query();

                $scope.game = GameManager;

                // Create a new game
                $scope.newGame = function() {
                    KeyboardService.init();
                    $scope.game.newGame();
                    $scope.startGame();
                };
                $scope.startGame = function() {
                    var self = $scope;
                    KeyboardService.on(function(key) {
                        console.log(key)
                    });
                };

                // Create a new game on boot
                $scope.newGame();

            }
        ]);
});