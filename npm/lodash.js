// play around with lodash

// initial setup
var lodash = require('lodash')

myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9 , 10, 11, 12, 13];

// use it to shuffle an array
console.log(lodash.shuffle(myArr));

// use it to sum an array
console.log(lodash.sum(myArr));

// use it to find the max
console.log(lodash.max(myArr));

// use it to find the mean
console.log(lodash.mean(myArr));

// use it to split an array into arrays of length x
console.log(lodash.chunk(myArr, 3));
