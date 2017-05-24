// adds a hand class which is just an array of cards

class Deck {
  constructor() {
    this. shuffled_deck = []
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
    var card = this.cards.pop();
    return card;
  }

  shuffle() {
    var index = Math.floor(Math.random() * this.cards.length)
    var card = this.cards[index];
    this.cards.splice(index, 1);
    this.shuffled_deck.push(card);
    console.log(card);
    if (this.cards.length > 0) {
      this.shuffle();
    }
    else if (this.cards.length = 0) {
      for (let i=0; i<this.shuffled_deck.length; i++) {
        this.cards.push(this.shuffled_deck[i]);
      }
    }
  }

  cardsLeft() {
    return this.cards.length;
  }
}
