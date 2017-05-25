// Closure practice

function counter () {
  var count = 0;
  var actuallyCount = function () {
    count++;
    return count;
  }
  return actuallyCount;
}

// testing
var count1 = counter()
var count2 = counter()
