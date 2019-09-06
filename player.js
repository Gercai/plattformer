// function draw(){
//     var canvas = document.getElementById('myCanvas');
//     if(canvas.getContext){
//         var ctx = canvas.getContext('2d');
//         ctx.beginPath();
//         ctx.arc(95, 50, 40, 0, 2 * Math.PI);
//         ctx.stroke();

//     }
// }

var full = 1;
var canvas = document.getElementById("myCanvas");




window.addEventListener( "keydown", DoKeyDown, true);

let xAxis = 125;
let yAxis = 55;
let xMove = 0;
let yMove = 0;



function DoKeyDown(e) {
    

    if(e.keyCode == 39){
        xMove = 5;
        moveCircle();
     
     } else if (e.keyCode == 37){
     
         xMove = -5;
         moveCircle();
    
     } else if (e.keyCode == 40) {
     
         yMove = 5;
         moveCircle();
    
     } else if (e.keyCode == 38){
         yMove = -5;
         moveCircle();
    
     }
     else{
        alert(e.keyCode);
     
     }
     

}


var ctx = canvas.getContext("2d");

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

ctx.clearRect(0,0,600,600);


xAxis = xAxis +xMove;
yAxis = yAxis +yMove;

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

function empty(){
    if (full > 0){
    full = full - 1;
    kreis();
    }
}
