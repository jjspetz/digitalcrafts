// adds a hand class which is just an array of cards

class Deck {
  constructor() {
    this.cards = [];
    this.remain = 52;
    this.init = function () {
      var label = ['2','3','4','5','6','7','8','9','10','jack','queen','king','ace'];
      var suit = ['clubs','spades','diamonds','hearts'];
      label.forEach((label) => {
        suit.forEach((suit) => {
          this.cards.push({'label': label, 'suit':suit, 'img':label + '_of_' + suit + '.png'})
        });
      });
    }
    this.init();
  }

  draw() {

  }

  shuffle() {

  }

  cardsLeft() {

  }
}
