// express server practice
// first express server app

var express = require('express');
var app = express();

// routes
app.get('/', function(request, response) {
  response.send('Hello World!');
});
app.get('/about', function(request, response) {
  response.send('About Me');
});
app.get('/projects', function(request, response) {
  response.send('My Projects');
});
// get URL paramaters
app.get('/post/:slug', function(request, response) {
  var slug = request.params.slug;
  response.send('Post About: ' + slug);
});
// get parameters
app.get('/hello', function(request, response) {
  var name = request.query.name || 'World;'
  response.send('Hello ' + name);
});

// server port
app.listen(8000, function() {
  console.log('listening on port 8000')
});
