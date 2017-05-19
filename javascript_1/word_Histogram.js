
function wordHistogram(text) {

  text = text.replace(/[.,!?'":;]/g, '')
  var arr = text.split(' ');
  var histogram = {};

  for (var word in arr) {
    if (histogram[arr[word]]) {
      histogram[arr[word]] += 1;
    } else {
      histogram[arr[word]] = 1;
    }
  }

  return histogram;
}

wordHistogram('This is a, te?st of "my;" histog:am');
