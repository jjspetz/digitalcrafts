// Node.js exercise two: DNS lookup

// imports
var dns = require('dns');
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a domain for lookup: ", function(domain) {
  console.log('Domain name: ' + domain);
  rl.close();

  dns.lookup(domain, function(error, address) {
    if (error) {
      console.error(error.message);
      return;
    }
    console.log('IP Address: ' + address);
  });
});
