// Using promises to print an array of websites' html

//imports
var rp = require('request-promise');

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
    .catch(function (err) {
      console.log(err);
    });
}
