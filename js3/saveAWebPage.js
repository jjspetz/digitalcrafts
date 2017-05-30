// Node.js exercise four: Save a Webpage

// imports
var fs = require('fs');
var readline = require('readline');
var url = require('url');
var request = require('request');

// sets up for input from the user
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// ask user for input file
rl.question("Enter a URL to save it's html: ", function(reply1) {
  // declare variables
  var address, output;
  address = 'http://' + reply1;
  console.log('URL: ' + reply1);

  // ask the user for output file
  rl.question("Enter the output file: ", function(reply2) {
    output = reply2;
    console.log('Save to file: ' + reply2);
    rl.close();

    // pulls url's html
    request.get(address, function(error, response, html) {
      if (error) {
        console.error(error.message);
        return;
      }

    // write formated text into output file
    fs.writeFile(output, html, function(error) {
      if (error) {
        console.error(error);
        return;
      }
      console.log(output + ' saved.');
      });
    });
  });
});
