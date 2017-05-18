// returns array of positive numbers

function positive(arr) {
  var positives = [];

  for (let i=0; i<arr.length; i++) {
    if (arr[i] % 2 == 0) {
      positives.push(arr[i])
    }
  }

  return positives;
}
