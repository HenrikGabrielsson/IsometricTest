var canvas = document.getElementById("gameBoard")
var context = canvas.getContext("2d")

canvas.width = 500
canvas.height = 500

var tileMap = [
               [1,1,1,1,1],
               [1,0,0,0,1],
               [0,0,0,0,1],
               [1,0,0,0,1],
               [1,1,0,1,1]
               ]

var drawIsoMap = function()
{
    
    var tiles = new Image()
    tiles.src = "tiles.png"
    
    var tilesWidth = 60;
    var tilesHeight = 30;

    tiles.addEventListener("load", function(){
        for (var row = 0;row < tileMap.length;row++)
        {
            for (var col = 0;col < tileMap[row].length;col++)
            {
                var tileX = tileMap[row][col] * tilesWidth;
                
                //x and y position
                var x = canvas.width/2 + (tilesWidth*col)/2 - (row*tilesWidth)/2
                var y = (row*tilesHeight)/2 + (col*tilesHeight)/2
           
                //draw tiletype on x and y position
                context.drawImage(tiles, tileX, 0, tilesWidth, tilesHeight, x, y, tilesWidth, tilesHeight)
            }
        }
    }, false)

}

drawIsoMap()

