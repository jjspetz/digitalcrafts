// creates a new album in the database using promises

var co = require('co');
var prompt = require('prompt-promise');
var res = [];

var promise = require('bluebird')
var pgp = require('pg-promise')({
  promiseLib: promise
});
var db = pgp({database: 'music_bank'})

prompt('album name: ')
.then(function name(val) {
  res.push(val);
  return prompt('album release date: ');
})
.then(function release_date(val) {
  res.push(val);
  return prompt('band name: ');
})
.then(function band(val){
  res.push(val)
  prompt.done();
  var result = {name: res[0], release_date: res[1], band: res[2]};
  var query = "INSERT INTO album VALUES (default, ${release_date}, ${name}, ${band})";
  return db.query(query, result);
})
.then(function() {
  var query = "SELECT id FROM album WHERE name=$1"
  return db.query(query, res[0]);
})
.then(function(id) {
  console.log('Created album with ID ' +  id[0].id);
})
.catch(function rejected(err) {
  console.log('error:', err.stack);
  prompt.finish();
})
.finally(function() {
  pgp.end();
});
