// Node.js exercise three: Read & Write

// imports
var fs = require('fs');
var readline = require('readline');

// sets up for input from the user
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// ask user for input file
rl.question("Enter the input file: ", function(reply1) {
  // declare variables
  var input, output;
  input = reply1;
  console.log('input file: ' + reply1);

  // ask the user for output file
  rl.question("Enter the output file: ", function(reply2) {
    output = reply2;
    console.log('output file: ' + reply2);
    rl.close();

    //reads input file
    fs.readFile(input, function (error, buffer) {
      if (error) {
        console.error(error);
        return;
      }
      // format the input file
      var content = buffer.toString().toUpperCase();

      // write formated text into output file
      fs.writeFile(output, content, function(error) {
        if (error) {
          console.error(error);
          return;
        }
        console.log(output + ' saved.');
      });
    });
  });
});
