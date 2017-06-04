// Chaining
// Using promises to save an array of websites' html file to the hard drive

//imports
var rp = require('request-promise');
var fs = require('fs');

// urls to scrape
var urls = [
  'https://en.wikipedia.org/wiki/Futures_and_promises',
  'https://en.wikipedia.org/wiki/Continuation-passing_style',
  'https://en.wikipedia.org/wiki/JavaScript',
  'https://en.wikipedia.org/wiki/Node.js',
  'https://en.wikipedia.org/wiki/Google_Chrome'
];

// iterates over array of urls
for (let i=0; i<urls.length; i++) {
  rp(urls[i])
    .then(function(html) {
      console.log(html);
    })

  // create output file
  var output = i + '.html';

  // write formated text into output file
  fs.writeFile(output, html, function(error) {
    if (error) {
      console.error(error);
      return;
    }
    console.log(output + ' saved.');
    });
  });
}
