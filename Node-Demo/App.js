var http = require("http");

http.createServer(function(req, res){
    res.writeHead(200, {'Conteny-Type' : 'text/plain'})
    res.end('Hello Mini')

}).listen(8080);