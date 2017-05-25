// objects 2

var mom = {
  firstName: 'Alice',
  lastName: 'Wong',
  eyeColor: 'brown',
  hairColor: 'black'
};
var daughter = {
  firstName: 'Ilene',
  hairColor: 'brown'
};

// one
daughter.__proto__ = mom;
// two
mom.showInfo = function() {
  console.log('first name: ' + this.firstName);
  console.log('last name: ' + this.lastName);
  console.log('eye color: ' + this.eyeColor);
  console.log('hair color: ' + this.hairColor);
}

mom.showInfo();
daughter.showInfo();
