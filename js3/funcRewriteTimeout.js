/*
  REWRITE these functions using callbacks and adding a Timeout of 1 sec

  function add(x, y) {
  var result = x + y;
  return result;
}

function subtract(x, y) {
  return x - y;
}

function greeting(person) {
  return 'Hola, ' + person + '!';
}

function product(numbers) {
  return numbers.reduce(function(a, b) {
    return a * b;
  }, 1);
}
*/

function add(x, y, callback) {
  setTimeout(function() {
    var result = x + y;
    callback(result);
  }, 1000);
}
// add function call
add(2,2, function(stuff) {
  console.log(stuff);
});

function subtract(x, y, callback) {
  setTimeout(function() {
    var result = x - y;
    callback(result);
  }, 1000);
}
// subtract function call
subtract(4,2, function(stuff) {
  console.log(stuff);
});

function greeting(person, callback) {
  setTimeout(function() {
    callback('안녕하세요, ' + person + '!');
  }, 1000);

}
// greeting test call
greeting('지혜', function(result) {
  console.log(result);
});

function product(numbers, callback) {
  setTimeout(function() {
    var result = numbers.reduce(function(a, b) {
      return a * b;
    }, 1);
    callback(result);
    }, 1000);
}
// product function test call
product([3, 4, 2], function(r) {
  console.log(r);
});
