// password exercises

var pbkdf2 = require('pbkdf2');
var crypto = require('crypto');

function create_hash(password) {
  var salt = crypto.randomBytes(20).toString('hex');
  var key = pbkdf2.pbkdf2Sync(
    password, salt, 36000, 256, 'sha256'
  );
  var hash = key.toString('hex');

  return [hash, salt];
}

// checking a password
function check_pass(stored_pass, password) {
  var pass_parts = stored_pass.split('$');
  var key = pbkdf2.pbkdf2Sync(
    password,
    pass_parts[2],
    parseInt(pass_parts[1]),
    256, 'sha256'
  );
  var hash = key.toString('hex');
  if (hash === pass_parts[3]) {
    console.log('Passwords Matched!');
  } else {
    console.log('Doesn\'t Match.');
  }
}

// test run
var stuff = create_hash('sideways');
var hash = stuff[0];
var salt = stuff[1];
var stored_pass = `pbkdf2_sha256$36000$${salt}$${hash}`;

// console.log(stored_pass);

check_pass(stored_pass, 'sideways');
