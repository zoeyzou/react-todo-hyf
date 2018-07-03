export class Deck {
  constructor(suits, values) {
    this.deck = Deck.shuffleDeck(Deck.createDeck(suits, values));
  }

  //create a deck with 16cards
  static createDeck(suits, values) {

    let deck = [];
    for (let suit of suits) {
      for (let value of values) {
        let card = {
          suit: suit,
          value: value
        }
        deck.push(card);
      }
    }
    return deck;
  } 

  //shuffle the deck
  static shuffleDeck(deck) {
    for (let i = 0; i < deck.length; i++) {
      let randomIdx = Math.trunc(Math.random() * deck.length);
      let tmp = deck[randomIdx];
      deck[randomIdx] = deck[i];
      deck[i] = tmp;
    }
    return deck;
  }

  dealCards(cardsNumber) {
    let cards = this.deck.splice(0, cardsNumber);
    return cards;
  }
}
  