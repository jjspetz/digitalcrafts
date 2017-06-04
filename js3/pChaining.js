// Chaining
// Using promises to save an array of websites' html file to the hard drive

//imports
var rp = require('request-promise');
var fs = require('fs-extra');

// urls to scrape
var urls = [
  'https://en.wikipedia.org/wiki/Futures_and_promises',
  'https://en.wikipedia.org/wiki/Continuation-passing_style',
  'https://en.wikipedia.org/wiki/JavaScript',
  'https://en.wikipedia.org/wiki/Node.js',
  'https://en.wikipedia.org/wiki/Google_Chrome'
];

// set up new promises
let getIt = function(i) {
  return rp(urls[i]);
}
let write = function(html, i) {
  let output = i + '.html';
  return fs.outputFile(output, html);
}
// iterates over array of urls
for (let i=0; i<urls.length; i++) {
  getIt(i)
    .then(function(html) {
      return write(html, i);
    })
    .then(function() {
      console.log('file ' + i + '.html saved');
    })
    .catch(function(err) {
      console.log(err);
    });
}
