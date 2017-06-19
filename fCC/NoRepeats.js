
function permAlone(str) {

  // Heap's algorithm
  var arr = str.split(''),
  permutations = [],
  myArr = [];

  function swap(a, b)
  {
    var tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
  }

  function generate(n) {
    if (n == 1) {
      permutations.push(arr.join(''));
    } else {
      for (var i = 0; i != n; ++i) {
        generate(n - 1);
        swap(n % 2 ? 0 : i, n - 1);
      }
    }
  }

  generate(arr.length);

  permutations.forEach(function(string, index) {
    for(var j=0; j<string.length; j++) {
      if(string[j] == string[j+1]) {
        myArr.push(index);
        console.log(index + ': deleted');
        break;
      }
    }
  });
  var len = myArr.length -1
  for (var k=len; k>=0; k--) {
    permutations.splice(myArr[k], 1);
  }

  return permutations.length;
}

permAlone('aab');
