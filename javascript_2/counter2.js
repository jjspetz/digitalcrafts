// Closure practice

function counter (start) {
  var count = start;
  var actuallyCount = function () {
    count++;
    return count;
  }
  return actuallyCount;
}

// testing
var count1 = counter()
var count2 = counter()
