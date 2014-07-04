var mapCanvas = document.getElementById("mapCanvas")
var mapContext = mapCanvas.getContext("2d")

var dudeCanvas = document.getElementById("dudeCanvas")
var dudeContext = dudeCanvas.getContext("2d")

var canvasHeight = 500
var canvasWidth = 700

   
var tilesWidth = 60;
var tilesHeight = 30;


mapCanvas.width = canvasWidth;
mapCanvas.height = canvasHeight;
dudeCanvas.height = canvasHeight;
dudeCanvas.width = canvasWidth;

var tileMap = [
               [1,1,1,1,1,1,1,1,1,0,1],
               [1,0,0,0,1,0,0,0,1,0,1],
               [0,0,0,0,0,0,0,0,0,0,1],
               [1,0,0,0,0,0,0,1,1,0,1],
               [1,0,0,0,0,0,0,1,1,0,1],
               [1,0,0,0,0,0,0,0,0,0,1],
               [1,1,0,1,1,1,1,1,1,1,1]
               ]

var drawIsoMap = function()
{
    
    var tiles = new Image()
    tiles.src = "tiles.png"
 

    tiles.addEventListener("load", function(){
        for (var row = 0;row < tileMap.length;row++)
        {
            for (var col = 0;col < tileMap[row].length;col++)
            {
                var tileX = tileMap[row][col] * tilesWidth;
                
                //x and y position
                var x = mapCanvas.width/2 + (tilesWidth*col)/2 - (row*tilesWidth)/2
                var y = (row*tilesHeight)/2 + (col*tilesHeight)/2
           
                //draw tiletype on x and y position
                mapContext.drawImage(tiles, tileX, 0, tilesWidth, tilesHeight, x, y, tilesWidth, tilesHeight)
            }
        }
    }, false)

}

var drawDude = function()
{
    var dudeWidth = 8;
    var dudeHeight = 30;
    
    var dudeX = 30;
    var dudeY = 0;
    var dudeIsoX = dudeCanvas.width/2 + tilesWidth/2 + dudeX - dudeY
    var dudeIsoY = (dudeY + dudeX)/2 - dudeHeight
    
    
    dudeContext.fillStyle ="green"
    dudeContext.fillRect(dudeIsoX, dudeIsoY, dudeWidth, dudeHeight)
}


    drawIsoMap()
    drawDude()
