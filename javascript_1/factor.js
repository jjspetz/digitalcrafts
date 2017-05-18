// Factors a given number

function findFactor(num) {
  let myArr = [];
  for (let i=num-1; i>1; i--) {
    if (num % i == 0)
      myArr.unshift(i)
  }

  return myArr;
}
