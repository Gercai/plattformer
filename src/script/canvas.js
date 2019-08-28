// ctx steht für Context!

function draw(){
    var canvas = document.getElementById('tutorial');
    if(canvas.getContext){
        var ctx = canvas.getContext('2d');
    }
}

