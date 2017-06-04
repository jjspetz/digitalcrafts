// more promises practice

// declare new promise
function addNumbers(x, y) {
  var promise = new Promise (function(resolve, reject) {
    try {
      if (typeof(x) === 'number' && typeof(y) === 'number') {
        resolve(x + y);
      } else {
        reject('Not a number');
      }
    } catch(error) {
      reject(error);
    }
  });
  return promise;
}

// test promise
addNumbers(12, 3)
  .then(function (answer) {
    console.log(answer);
  })
  .catch(function (error) {
    console.log(error);
  });
