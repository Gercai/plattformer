// ctx steht für Context!

function draw(){
    var canvas = document.getElementById('myCanvas');
    if(canvas.getContext){
        var ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.arc(95, 50, 40, 0, 2 * Math.PI);
        ctx.stroke();

    }
}

