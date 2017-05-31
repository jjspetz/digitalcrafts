/*
  Extract the following code into its own function:

  var fs = require('fs');
  var gm = require('gm');
  var request = require('request');

  var url = 'https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png';
  var filename = 'js-logo.png';
  var thumbnailFilename = 'js-logo-small.png';
  var requestOptions = {
    url: url,
    encoding: null
  };
  request(requestOptions, function(err, response, data) {
    if (err) {
      console.log(err.message);
      return;
    }

    fs.writeFile(filename, data, function(err) {
      if (err) {
        console.log(err.message);
        return;
      }
      gm(filename)
        .resize(240, 240)
        .write(thumbnailFilename, function(err) {
          if (err) {
            console.log(err.message);
            return;
          }
          console.log('It worked');
        });
    });
  });
*/

// imports
var fs = require('fs');
var gm = require('gm');
var request = require('request');

function downloadAndCreateThumbnail(imageURL, filename, thumbnailFilename, requestOptions, callback) {
  request(requestOptions, function(err, response, data) {
    if (err) {
      callback(err);
      return;
    }

    fs.writeFile(filename, data, function(err) {
      if (err) {
        callback(err);
        return;
      }
      gm(filename)
        .resize(240, 240)
        .write(thumbnailFilename, function(err) {
          if (err) {
            callback(err);
            return;
          }
          callback();
        });
    });
  });
}

// test call
var url = 'https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png';
var filename = 'js-logo.png';
var thumbnailFilename = 'js-logo-small.png';
var requestOptions = {
  url: url,
  encoding: null
};

downloadAndCreateThumbnail(url, filename, thumbnailFilename, requestOptions, function(err) {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log('It worked');
})
