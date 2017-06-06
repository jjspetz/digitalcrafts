// express server practice
// first express server app

var express = require('express');
var app = express();

// view
app.get('/', function(request, response) {
  response.send('Hello World!');
});

// server port
app.listen(8000, function() {
  console.log('listening on port 8000')
});
