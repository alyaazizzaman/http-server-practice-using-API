'use strict';

var fs = require('fs');
var http = require('http');

//res.statusCode, 200 is for success and 404 is for the error
function handleRequest(req, res, filename) {
  if (req.url === '/index.html') {
    fs.readFile('./index.html', function(err, data) {
      res.statusCode = 200;
      res.write(data.toString());
      res.end();
    });
  } else if (req.url === '/app.js') {
    fs.readFile('./app.js', function(err, data) {
      res.statusCode = 200;
      res.write(data.toString());
      res.end();
    });
  } else if (req.url === '/api') {
    fs.readFile('./data.json', function(err, data) {
      res.statusCode = 200;
      res.write(data.toString());
      res.end();
    });
  } else {
    res.statusCode = 404;
    console.log('statusCode 404');
    res.write('404: this doesnt exist');
    res.end();
  }
}

//create a server using http
var server = http.createServer(handleRequest);

//start the server on port 8000
server.listen(8000, 'localhost', function() {
  console.log('running on localhost:8000');
});
