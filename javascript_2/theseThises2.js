// rewrite old style function class as an E6JS class

class Person {
  constructor(name) {
    this.name = name;
    this.friends = [];
  }

  addFriend(friend) {
    this.friends.push(friend);
  }

  createGreeting(other) {
    return 'Yo ' + other.name + '! from ' + this.name + '.';
  }

  createGreetingsForFriends() {
    return this.friends.map((other) => {
      return 'Yo ' + other.name + '! from ' + this.name + '.';
    });
  }

  greet(other) {
    console.log(this.createGreeting(other));
  }

  lazyGreet(other) {
    setTimeout(() => {
      console.log(this.createGreeting(other));
    }, 2000);
  }
}

// testing commands
var alfie = new Person('Alfie');
var anushka = new Person('Anushka');
var henrique = new Person('Henrique');
alfie.addFriend(anushka);
alfie.addFriend(henrique);
alfie.createGreetingsForFriends();
