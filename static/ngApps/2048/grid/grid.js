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


    app.service('GridService',
        [
            'TileModel',
            function(TileModel)
            {
                this.tiles  = [];
                this.tiles.push(new TileModel({x: 1, y: 1}, 2));
                this.tiles.push(new TileModel({x: 1, y: 2}, 2));
                // ...
            }
        ]);
});
