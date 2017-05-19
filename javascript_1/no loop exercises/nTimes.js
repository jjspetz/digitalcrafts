// passing functions to functions

function callNTimes(num, fun) {
  for(let i=0; i<num; i++) {
    fun();
  }
}

function hello() {
  console.log('Hello, world!');
}

callNTimes(5, hello);
