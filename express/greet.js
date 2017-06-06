// this server will have several templates for more practice using express

var express = require('express');
var app = express();

// import handlebars
app.set('view engine', 'hbs');

// for static files
app.use('/static', express.static('public'));

app.get('/greet/:slug', function(req, res) {
  var d = new Date();
  var slug = req.params.slug;
  var year = (d.getFullYear() - req.query.age) || 'unknown';

  var content = {
    title: 'Greet',
    name: slug,
    year: year
  };
  res.render('greet.hbs', content);
});

// server port
app.listen(8000, function() {
  console.log('listening on port 8000')
});
