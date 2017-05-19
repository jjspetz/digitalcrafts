
function letterHistogram(text) {
  var arr = text.split('');
  var histogram = {};

  for (var letter in arr) {
    if (histogram[arr[letter]]) {
      histogram[arr[letter]] += 1;
    } else {
      histogram[arr[letter]] = 1;
    }
  }

  return histogram;
}
