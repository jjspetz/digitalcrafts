// use async to write to an array of files

// imports
var map = require('async/map');
var fs = require('fs');

// array of files
var filenames = [
  '1.txt',
  '2.txt',
  '3.txt',
  '4.txt',
  '5.txt',
  '6.txt',
  '7.txt',
  '8.txt',
  '9.txt',
  '10.txt'
];

// What is written in the file
var content = 'Hello, world!';

map(filenames, function(item) {
  fs.writeFile(item, content, function(error) {
    if (error) {
      console.error(error);
      return;
    }
    console.log(item + ' saved.');
  })
});
