var express = require('express');

// Constants
var PORT = 8080;

// App
var userCount = 0;
var app = express();
app.get('/', function (request, response) {
userCount++;
response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('<h1>Hello NAG!</h1>\n');
    response.write('<hr>\n');
    response.write('<h3>There have been <strong>' + userCount + '</strong> visitors to this page</h3>\n');
    response.end();
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
