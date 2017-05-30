// Node.js exercise one: read a file

var fs = require('fs');
var file = 'file1.txt';

fs.readFile(file, function(error, buffer) {
  if (error) {
    console.log('filename: ' + file);
    console.log(error.message);
    return;
  }
  console.log('filename: ' + file);
  console.log(buffer.toString());
});
