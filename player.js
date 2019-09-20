// function draw(){
//     var canvas = document.getElementById('myCanvas');
//     if(canvas.getContext){
//         var ctx = canvas.getContext('2d');
//         ctx.beginPath();
//         ctx.arc(95, 50, 40, 0, 2 * Math.PI);
//         ctx.stroke();
//     }
// }


var canvas = document.getElementById("myCanvas");

window.addEventListener( "keydown", gameLoop, true);

draw();

let xAxis = 125;
let yAxis = 55;
let xMove = 0;
let yMove = 0;

var ctx = canvas.getContext("2d");

let keyState = {};

window.addEventListener('keydown',function(e){
    keyState[e.keyCode || e.which] = true;
},true);
window.addEventListener('keyup',function(e){
    keyState[e.keyCode || e.which] = false;
},true);


function gameLoop() {
    if (keyState[37] || keyState[65]){
        xMove -= 1;
        moveCircle();
    }    
    if (keyState[39] || keyState[68]){
        xMove += 1;
        moveCircle();
    }
    if (keyState[40]){
        yMove += 1;
        moveCircle();
    }
    if (keyState[38]){
        yMove -= 1;

        moveCircle();
    }
    // redraw/reposition your object here
    // also redraw/animate any objects not controlled by the user
    loadScore();
    setTimeout(gameLoop, 1000);
}    


player1 = {

};


function createCircle(){
ctx.save();
ctx.beginPath();
ctx.arc(xAxis, 55, 50, 0, 1 * Math.PI)
ctx.fill();
}

function kreis2(){
ctx.beginPath();
ctx.arc(xAxis, yAxis, 50, 0, 2 * Math.PI)
ctx.fill();
ctx.restore();
}

createCircle();

console.log(ctx);

function moveCircle(){

ctx.clearRect(0,0,1400,1000);


xAxis = xAxis + xMove;
yAxis = yAxis + yMove;

xMove = 0;
yMove = 0;

kreis2();
}

function kreis(){
ctx.beginPath();
ctx.arc(95, 55, 50, 0, 0.1 * full * Math.PI);
ctx.stroke();
}

function fillCircle(){
    full = full + 1;
    kreis();
}

function loadScore(){
    document.getElementById("score").innerHTML= "x: " +xAxis + " y: " +    yAxis;
}

function empty(){
    if (full > 0){
    full = full - 1;
    kreis();
    }
}

for (var column = 0; column < map.columns; column++) {
    for (var row = 0; row < map.rows; row++) {
      var tile = map.getTile(column, row);
      var x = column * map.tileSize;
      var y = row * map.tileSize;
      drawTile(tile, x, y);
    }
  }

function draw() {
    var ctx = document.getElementById('myCanvas').getContext('2d');
    for (var i = 0; i < 70; i++) {
      for (var j = 0; j < 50; j++) {
        ctx.fillStyle = 'rgb(' + Math.floor(100 - 5.5 * j) + ', ' +
                         Math.floor(255 - 12.5 * i) + ', 0)';
        ctx.fillRect(j * 25, i * 25, 25, 25);
      } 
    }
  }

