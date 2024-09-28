var http = require('http');

http.createServer(function (req, res) {
  // add a HTTP header:
    // res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url).query;
    res.end();
}).listen(8080,()=>{
    console.log('srver work ')
});

