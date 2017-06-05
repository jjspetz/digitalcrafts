// practice using pg-promise

var promise = require('bluebird')
var pgp = require('pg-promise')({
  promiseLib: promise
});
var db = pgp({database: 'restaurant'})

db.query('SELECT * FROM restaurant')
  .then(function(results) {
    results.forEach(function(row) {
      console.log(row.id, row.name, row.address, row.category);
    });
  })
  .catch(function(err) {
    console.log(err);
  })
  .finally(function() {
    pgp.end();
  });
