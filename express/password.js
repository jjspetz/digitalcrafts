// password exercises

var pbkdf2 = require('pbkdf2');
var crypto = require('crypto');

exports.create_hash = function(password) {
  var salt = crypto.randomBytes(20).toString('hex');
  var key = pbkdf2.pbkdf2Sync(
    password, salt, 36000, 256, 'sha256'
  );
  var hash = key.toString('hex');

  var stored_pass = `pbkdf2_sha256$36000$${salt}$${hash}`;
  return stored_pass;
}

// checking a password
exports.check_pass = function(stored_pass, password) {
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
    return true;
  } else {
    console.log('Doesn\'t Match.');
    return false
  }
}

// test run
// console.log(create_hash('sideways'));
//
// check_pass(stored_pass, 'sideways');
