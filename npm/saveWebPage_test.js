// test out saveWebPage module

// import saveWebPage
var saveWebPage = require('./saveWebPage');

var url = 'http://css-tricks.com';
var filename = 'css-tricks.html';
saveWebPage(url, filename, function(err) {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log('It worked.');
});
