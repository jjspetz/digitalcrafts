// sums all numbers in an array

function sum(arr) {
  var sum = 0;

  for (let i=0; i<arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}
