// Closure practice

class counter {
  constructor(start) {
    this.count = start;
  }
  increment() {
    this.count++;
    return this.count;
  }
  decrement() {
    this.count--;
    return this.count;
  }
}

// testing
var c1 = new counter(0)
var c2 = new counter(60)
