    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    let radius = canvas.height/2;
    radius = radius * 0.85;
    console.log(radius);
    drawClock();
    resetTime();

    myFunction();
    
    function drawClock(){
    ctx.beginPath();
    ctx.arc(300, 300, radius, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();    
    ctx.font = "30px Arial";
    ctx.fillStyle = "red";

    var xCoordinate = radius/0.90;
    var yCoordinate = radius/2;
    for(let i = 1; i <= 12; i++){

        xCoordinate = radius/0.90 + radius/1.2 * Math.cos(i/12*Math.PI*2-3/12*Math.PI*2);
        yCoordinate = radius/0.85 + radius/1.2 * Math.sin(i/12*Math.PI*2-3/12*Math.PI*2);
        ctx.fillText( i, xCoordinate, yCoordinate);
   
            
    }


    }

  
    var date = new Date();


    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    var output = document.getElementById("output");
   

        

    function resetTime(){
    
}    

function myFunction() {
    setInterval(function(){

        ctx.clearRect(0,0,1000,1000);
        drawClock();
        date = new Date();
        seconds = date.getSeconds();
        let hour = date.getHours();
        let minute = date.getMinutes();
      

        output.innerHTML= "Radius = " +  radius + "<br>" +
        "hour = " + hour + "<br>" +
        "minute = " + minute + "<br>" +
        "seconds = " + seconds;    

        ctx.save();

        xCoordinate = radius/0.90 + radius/1.2 * Math.cos(seconds/60*Math.PI*2-3/12*Math.PI*2);
        yCoordinate = radius/0.85 + radius/1.2 * Math.sin(seconds/60*Math.PI*2-3/12*Math.PI*2);
        ctx.fillText( "O", xCoordinate, yCoordinate);
        
        ctx.restore();
        

    }, 1000);
}






