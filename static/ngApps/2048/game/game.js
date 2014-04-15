define(['app'], function(app){
    app.service('GameManager',
        [ function(){
            // Create a new game
            this.newGame = function() {};
            // Handle the move action
            this.move = function() {};
            // Update the score
            this.updateScore = function(newScore) {};
            // Are there moves left?
            this.movesAvailable = function() {};
        }
        ]);
});


