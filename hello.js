var http = require('http');

http.createServer(function (req,res){
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.end('Hello World!');

}).listen(8080);


//var dt = require('./src/modules/myfirstmodule')


/*http.createServer(function(req,res)
{
    res.WriteHead(200, {'Content-Type' : 'text/html'});
    res.write("The date and time are currently: " + dt.myDateTime());
    res.end();
}).listen(8080); 

*/