/*
  1. Create an object of card
  2. Create an object of player with the following : name, age, winner
  3. Create an object for game with the following variables: array of four players and four arrays of cards.
  4. Each array belongs to one player.
  5. Create a function to distribute the cards to the four arrays.
  6. Take the next player in the array. 
  7. Find cards with highest frequency.
  8. Go to the next player and see if the player has the card you want
  9. If it does continue and go to 7. If not go to 6.
  10. If at any point there is one happy family in one of the array change the winner key to "true"
  declare winner. 
  */

class Game {
  constructor () {
    this.deck = this._shuffleDeck(this._createDeck()); 
    this.players = this._getPlayersReady();
    this.gameOver = false;
  }

  //create a deck with 16cards
  _createDeck() {
    const suits = ['Heart', 'Diamon', 'Spade', 'Club'];
    const values = ['Jack', 'Queen', 'King', 'Ace'];
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
  _shuffleDeck(deck) {
    for (let i = 0; i < deck.length; i++) {
      let randomIdx = Math.trunc(Math.random() * deck.length);
      let tmp = deck[randomIdx];
      deck[randomIdx] = deck[i];
      deck[i] = tmp;
    }
    return deck;
  }

  _getPlayersReady() {
    let players = [];
    const names = ['Jack', 'Rose', 'Luis', 'Dan'];

    for (let i = 0; i < 4; i++) {
      let player = {
        name: names[i],
        age: Math.round(Math.random() * 60 + 18),//so it gives min 18 and max 78 of play age
        cards: this.deck.splice(0,4),
      }
      players.push(player);
    }

    for (let player of players) {
      player.frequentCards = this._getMostFrequentValuedCards(player.cards);
    }

    return players;
  }

  //sort cards for player
  _sortCards(cards) {
    
    cards.sort(function(a, b) {
      const valueA = a.value;
      const valueB = b.value; 
      
      if (valueA < valueB) {
        return -1;
      }
      if (valueA > valueB) {
        return 1;
      }
      return 0;
    });
    return cards;
  }


  _getMostFrequentValuedCards(cards) {
    const sortedCards = this._sortCards(cards);
    let value = sortedCards[0].value,
        mostFrequentValuedCards = [];
    
    for (let i = 0; i < sortedCards.length - 1; i++) {
      if (sortedCards[i+1].value === sortedCards[i].value)
        value = sortedCards[i].value;  
    }
    
    for (let card of cards) {
      if (card.value === value) 
        mostFrequentValuedCards.push(card);
    }
    return mostFrequentValuedCards;
  }
}

let game = new Game();
console.log(game);



