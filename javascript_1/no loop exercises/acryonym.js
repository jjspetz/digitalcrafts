// a function that takes an array of words as argument and returns
// the acronym of the words. Use the reduce method to do this.

function acronym(array) {
  var initial = array.reduce(function(x,y) {
    return x+= y[0];
  }, '');
  return initial;
}

acronym(['very', 'important', 'person']);
