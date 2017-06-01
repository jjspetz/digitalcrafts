// Using require and cherrio JS packages build a web scrapper to find specific
// data from the npmjs.com web page.

// imports
var request = require('request');
const cheerio = require('cheerio');

// globals
var returnArray = [];

// make website request
request('https://www.npmjs.com/', function (error, response, body) {
  // prints any error to screen
  if (error) {
    console.log('error: ', error);
  }

  // prints body for testing
  // console.log('body: ', body);

  // load the html into cheerio
  const $ = cheerio.load(body);

  // call on the packages people 'npm install' a lot element and
  // searches for what to put into the array
  var info = $('#pane-frequently-installed h3 > a').each(function (index, element) {
    returnArray.push($(element).text());
  });

  console.log(returnArray);

});
