// sort an array of arrays by sum

var print;
var arr = [
  [1, 3, 4],
  [2, 4, 6, 8],
  [3, 6]
];

print = arr.sort( (x,y) =>
  x.reduce( (x,y) => x + y) > y.reduce((x,y) => x + y) ? 1 :
  x.reduce( (x,y) => x + y) < y.reduce((x,y) => x + y) ? -1 :
  0
)
