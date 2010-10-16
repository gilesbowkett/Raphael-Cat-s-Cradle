var http = require('http'),
    sys = require('sys'),
    url = require('url'),
    nodeStatic = require('./vendor/node-static/lib/node-static'),
    rest = require('./vendor/restler/lib/restler'),
    jade = require('./vendor/jade');

http.createServer(function (request, response) {
  var location = url.parse(request.url, true),
      params = (location.query || request.headers);
  
  if (location.pathname == '/' && request.method == "GET") {
    response.writeHead(200, {
      'Content-Type': 'application/x-javascript'
    });
    response.writeHead(200, {'Content-Type': 'text/html'});
    jade.renderFile('view.jade', {}, function(err, html){
      response.end(html);
    });
  } else {
    new nodeStatic.Server('./public', {cache: false}).serve(request, response);
  }
}).listen(3000, "127.0.0.1");
