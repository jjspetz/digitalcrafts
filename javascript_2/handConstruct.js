// adds a hand class which is just an array of cards

class Hand {
  constructor(name) {
    this.player = name;
    this.hand = [];
    this.sum = 0;
  }
  addCard(card) {
    this.hand.push(card);
  }
  // sums up points in hand but does not handle ace properly
  getPoints() {
    for(let i = 0; i < this.hand.length; i++) {
      if (this.hand[i].point > 10) {
        this.sum += 10;
      } else {
        this.sum += this.hand[i].point;
      }
    }
    return this.sum;
  }
}

class Card {
  constructor(point, suit) {
    this.point = point;
    this.suit = suit;
  }

  getURL() {
    return `images/${this.point}_of_${this.suit}.png`;
  }
}
