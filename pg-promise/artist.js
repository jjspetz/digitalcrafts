// creates a new artist in the database using promises

var co = require('co');
var prompt = require('prompt-promise');
var res = [];

var promise = require('bluebird')
var pgp = require('pg-promise')({
  promiseLib: promise
});
var db = pgp({database: 'music_bank'})

prompt('Artist name: ')
.then(function name(val) {
  res.push(val);
  return prompt('A lead artist?: ');
})
.then(function lead(val) {
  res.push(val);
  return prompt('A song writer?: ');
})
.then(function writer(val) {
  res.push(val);
  return prompt('A collaborator?: ');
})
.then(function collaborator(val) {
  res.push(val);
  prompt.done();
  var result = {name: res[0], lead_artist: res[1], song_writer: res[2], collaborator: res[3]};
  var query = "INSERT INTO artist VALUES (default, ${lead_artist}, ${song_writer}, ${collaborator}, ${name})";
  return db.result(query, result);
})
.then(function() {
  var q = "SELECT id FROM artist WHERE name=$1"
  return db.query(q, res[0]);
})
.then(function(id) {
  console.log('Created album with ID ' +  id[0].id);
})
.catch(function(err) {
  console.log(err);
})
.finally(function() {
  pgp.end();
});
