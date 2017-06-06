// template for displaying favorite animals

var express = require('express');
var app = express();

// import handlebars
app.set('view engine', 'hbs');

// for static files
app.use('/static', express.static('public'));

app.get('/fav_animals', function(req, res) {
  var animals = [
    { name: 'cats', favorite: true },
    { name: 'dogs', favorite: true },
    { name: 'tree frogs', favorite: true },
    { name: 'earth worms', favorite: false },
    { name: 'guinea pigs', favorite: true },
  ];

  var content = {
    animal: animals
  }
  res.render('fav_animals.hbs', content);
});

// server port
app.listen(8000, function() {
  console.log('listening on port 8000')
});
