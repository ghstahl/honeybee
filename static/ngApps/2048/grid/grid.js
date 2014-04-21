define(['app'], function(app){
    app.service('GridService',
        [
            function()
            {
                this.grid   = [];
                this.tiles  = [];
                // Size of the board
                this.size   = 4;
                // ...

                // Build game board
                this.buildEmptyGameBoard = function() {
                    var self = this;
                }
            }
        ]);

    app.factory('GridFactory',
        [
            function()
            {
                var theFactory = function(pos, val)
                {
                    this.grid   = [];
                    this.tiles  = [];
                    // Size of the board
                    this.size   = 4;
                    // ...

                    // Build game board
                    this.buildEmptyGameBoard = function() {
                        var self = this;
                    }
                };

                return theFactory;
            }
        ]);

    app.factory('TileModel',
        [
            function()
            {
                var Tile = function(pos, val)
                {
                    this.x = pos.x;
                    this.y = pos.y;
                    this.value = val || 2;
                };

                return Tile;
            }
        ]);


});
