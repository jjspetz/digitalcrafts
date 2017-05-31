// use async to write to an array of files

// imports
var map = require('async/map');
var filter = require('async/filter')
var fs = require('fs');

// array of files
var filenames = [
  '0.txt',
  '1.txt',
  '2.txt',
  '3.txt',
  '4.txt',
  '5.txt',
  '6.txt',
  '7.txt',
  '8.txt',
  '9.txt',
  '10.txt',
  '11.txt'
];

// What is written in the file
var content = 'Hello, world!';

filter(filenames, function(filePath, callback) {
  fs.access(filePath, fs.constants.F_OK, function(error) {
      if (error) {
        console.error(error.message)
      }
      callback(null, !error);
    });
  }, function(error, results) {
      console.log(results);
});
