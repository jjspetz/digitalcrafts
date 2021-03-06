// express server practice
// first express server app

var express = require('express');
var app = express();
var bp = require('body-parser');

var promise = require('bluebird')
var pgp = require('pg-promise')({
  promiseLib: promise
});
var db = pgp({database: 'restaurant'})

var apicache = require('apicache');
var cache = apicache.middleware;

// import handlebars
app.set('view engine', 'hbs');

// for static files
app.use('/static', express.static('public'))
app.use(bp.urlencoded({extended: false}));

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

// API
app.get('/api', cache('5 minutes'), function (request, response) {
  console.log('generating a new response')
  response.json(
    {message: 'This is my api'}
  )
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

// form routes
app.get('/form', function(req, res) {
  res.render('form.hbs', {title: 'form'});
});

app.post('/submit', function(req, res) {
  console.log(req.body);
  // res.send(req.body);
  res.redirect('/thanks')
});
app.get('/thanks', function(req, res) {
  res.render('thanks.hbs', {title: 'Thank You'});
});

app.get('/search', function(req, resp, next) {
  let term = req.query.term;
  let query = "SELECT * FROM restaurant WHERE \
  restaurant.name ILIKE '%$1#%'";
  db.any(query, term)
    .then(function(results) {
      resp.render('results.hbs', {
        results: results
      });
    })
    .catch(next);
});

// server port
app.listen(8000, function() {
  console.log('listening on port 8000')
});
