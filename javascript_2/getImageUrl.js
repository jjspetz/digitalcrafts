// adds get URL method to cardConstruct

class Card {
  constructor(point, suit) {
    this.point = point;
    this.suit = suit;
  }

  getImgURL() {
    return `images/${this.point}_of_${this.suit}.png`;
  }
}
