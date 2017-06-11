// express server practice
// first express server app

var express = require('express');
var app = express();
var bp = require('body-parser');
var passFunc = require('./password');
var morgan = require('morgan');
var session = require('express-session');
var promise = require('bluebird')
var pgp = require('pg-promise')({
  promiseLib: promise
});
var db = pgp({database: 'todo'})

// import handlebars
app.set('view engine', 'hbs');

// Middleware
app.use('/static', express.static('public'))
app.use(bp.urlencoded({extended: false}));
app.use(morgan('dev'));

app.use(session({
  secret: process.env.SECRET_KEY || 'dev',
  resave: true,
  saveUninitialized: false,
  cookie: {maxAge: 3660000}
}));

app.use(function (request, response, next) {
  if (request.session.user) {
    next();
  } else if (request.path == '/login' || request.path == '/signup') {
    next();
  } else {
    response.redirect('/login');
  }
});

// login route
app.get('/login', function (request, response) {
  response.render('login.hbs');
});
app.post('/login', function (request, response, next) {
  var username = request.body.username;
  var password = request.body.password;
  var query = "SELECT * FROM users WHERE name=$1";

  db.one(query, username)
    .then(function(results) {
      if(passFunc.check_pass(results.password, password)) {
        // sets user as table id for easy access later
        request.session.user = results.id;
        response.redirect('/todos');
      } else {
        response.render('login.hbs');
      }
    })
    .catch(next);
});

app.get('/signup', function (request, response) {
  response.render('signup.hbs');
});
app.post('/signup', function (request, response, next) {
  var username = request.body.username;
  var password = request.body.password;
  var hash = passFunc.create_hash(password);
  var query = "INSERT INTO users VALUES (default, $1, $2)";
  db.query(query, [username, hash])
    .then(function(results) {
        console.log('successfully added to table');
        response.redirect('login.hbs');
    })
    .catch(next);
});

// functionality for displaying todo list
app.get('/todos', function(req, resp, next) {
  let query = "SELECT * FROM task WHERE user_id=$1";
  db.any(query, req.session.user)
    .then(function(results) {
      resp.render('todo.hbs', {
        title: 'TODO',
        results: results,
        style: '../../static/todo.css',
      });
    })
    .catch(next);
});

// functionality for adding to todo list
app.get('/todos/add', function(req, resp) {
  resp.render('add.hbs', {
    title: 'Add',
    style: '../../static/todo.css',
  });
});

// posted added task to database and redirects to list
app.post('/submit', function(req, resp) {
  db.query("INSERT INTO task (description, user_id) VALUES($1, $2)", [req.body.task, req.session.user])
    .then(function() {
      resp.redirect('/todos');
    })
});

// functionality for moving completed task to complete list
app.get('/todos/done/:id', function(req, resp) {
  var id = req.params.id;
  db.query("UPDATE task SET done=TRUE WHERE id=$1", id)
    .then(function() {
      resp.redirect('/todos');
    })
});

// server port
app.listen(8000, function() {
  console.log('listening on port 8000')
});
