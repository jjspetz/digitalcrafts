/*
  REWRITE these functions using callbacks

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
  var result = x + y;
  callback(result);
}
// add function call
add(2,2, function(stuff) {
  console.log(stuff);
});

function subtract(x, y, callback) {
  var result = x - y;
  callback(result);
}
// subtract function call
subtract(4,2, function(stuff) {
  console.log(stuff);
});

function greeting(person, callback) {
  callback('안녕하세요, ' + person + '!');
}
// greeting test call
greeting('지혜', function(result) {
  console.log(result);
});

function product(numbers, callback) {
  var result = numbers.reduce(function(a, b) {
    return a * b;
  }, 1);
  callback(result);
}
// product function test call
product([3, 4, 2], function(r) {
  console.log(r);
});
