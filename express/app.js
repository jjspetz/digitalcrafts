// express server practice
// first express server app

var express = require('express');
var app = express();

// import handlebars
app.set('view engine', 'hbs');

// for static files
app.use('/static', express.static('public'))

// capitalize function
String.prototype.capitalize = function() {
    return this.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
};

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
// exercise routes
app.get('/cats', function(req, res) {
  res.send('Meow');
});
app.get('/dogs', function(req, res) {
  res.send('Woof');
});
app.get('/cats_and_dogs', function(req, res) {
  res.send('Living together');
});
// get URL paramaters
app.get('/post/:slug', function(request, response) {
  var slug = request.params.slug;
  response.send('Post About: ' + slug);
});
// greet exercise
app.get('/greet/:slug', function(req, res) {
  var slug = req.params.slug;
  res.send(`Hello, ${slug}!`);
});
// get parameters
app.get('/hello', function(request, response) {
  var name = request.query.name || 'World';
  var context = {
    title: 'Hello',
    name: name.capitalize(),
    friends: [
      {name:'JJ', age:34},
      {name: 'Jordan'},
      {name: 'Ronda'}
    ]
  };
  response.render('hello.hbs', context);
});

// report your age exercise
app.get('/year', function(req, res) {
  var d = new Date();
  var birthYear = (d.getFullYear() - req.query.age) || 'unknown';
  var context = {
    title: 'Age',
    year: birthYear
  }
  res.render('age.hbs', context);
});

// server port
app.listen(8000, function() {
  console.log('listening on port 8000')
});
