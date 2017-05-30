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

function subtract(x, y) {
  var result = x - y;
  callback(result);
}
