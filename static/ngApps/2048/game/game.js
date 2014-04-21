define(['app'], function(app){
    app.service('GameManager',
        [   'GridService',
            'KeyboardService',
            '$timeout',
            function(GridService,KeyboardService,$timeout ){

                var self = this;
               // self.Cookies = $cookies;

                // Create a new game
                this.newGame = function() {
                    GridService.buildEmptyGameBoard();
//                    GridService.buildStartingPosition();
//                    this.reinit();
                };

                // Handle the move action
                this.move = function() {};
                // Update the score
                this.updateScore = function(newScore) {};
                // Are there moves left?
                this.movesAvailable = function() {};
            }
        ]);
});

