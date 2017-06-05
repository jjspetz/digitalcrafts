// creates a new track in the database using promises

var co = require('co');
var prompt = require('prompt-promise');
var res = [];

var promise = require('bluebird')
var pgp = require('pg-promise')({
  promiseLib: promise
});
var db = pgp({database: 'music_bank'})

prompt('track number: ')
.then(function track(val) {
  res.push(val);
  return prompt('album id: ');
})
.then(function albumId(val) {
  res.push(val);
  return prompt('song id: ');
})
.then(function songId(val) {
  res.push(val);
  return prompt('length: ');
})
.then(function length(val) {
  res.push(val);
  return prompt('artist id: ');
})
.then(function artistId(val) {
  res.push(val);
  prompt.done();
  var result = {track: res[0], album_id: res[1], song_id: res[2], length: res[3], artist_id: res[4]};
  var query = "INSERT INTO track VALUES (default, ${track}, ${album_id}, ${song_id}, ${length}, ${artist_id})";
  return db.result(query, result);
})
.then(function() {
  var q = "SELECT max(id) FROM track"
  return db.query(q);
})
.then(function(id) {
  console.log('Created album with ID ' +  id[0].max);
})
.catch(function(err) {
  console.log(err);
})
.finally(function() {
  pgp.end();
});
