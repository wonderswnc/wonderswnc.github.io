var http = require('http');
var fs = require('fs');

var html = fs.readFileSync('./index.html');

http.createServer((req, res) => {

  res.writeHead(200,{'Content-Type': 'text/html'});
  res.write(html);
  res.end();
}).listen(1080);
