

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

var obj = letterHistogram('샤라샤라했어요');

function toptwo(obj) {
  var arr = [];
  for (things in obj) {
    arr.push(things)
  }
  return arr.slice(0, 2);
}
