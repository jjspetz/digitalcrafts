// express server practice
// first express server app

var express = require('express');
var app = express();
var bp = require('body-parser');

var promise = require('bluebird')
var pgp = require('pg-promise')({
  promiseLib: promise
});
var db = pgp({database: 'todo'})

// import handlebars
app.set('view engine', 'hbs');

// for static files
app.use('/static', express.static('public'))
app.use(bp.urlencoded({extended: false}));


// functionality for displaying todo list
app.get('/todos', function(req, resp) {
  let query = "SELECT * FROM task";
  db.any(query)
    .then(function(results) {
      resp.render('todo.hbs', {
        title: 'TODO',
        results: results,
        style: '../../static/todo.css',
      });
    })
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
  db.query("INSERT INTO task (description) VALUES($1)", req.body.task)
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
