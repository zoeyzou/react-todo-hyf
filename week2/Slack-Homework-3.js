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

// class to create player
class Player {
  constructor(name, age, deck) {
    this.name = name;
    this.age = age;
    this.winner = false;
    this.cards = this.getCards(deck);
  }
  
  getCards(deck) {
    return deck.splice(0, 4);
  } //method to deal cards to player

  
  getMostFrequentValue() {
    const playerCards = sortCards(this);
    
    let value = playerCards[0].value;
    
    for (let i = 0; i < playerCards.length - 1; i++) {
      if (playerCards[i+1].value === playerCards[i].value)
        value = playerCards[i].value;  

    }
    
    return value;
  }


  checkForWin() {
    let k = 0, q = 0, j = 0, a = 0; 

    for(let i = 0; i < this.cards.length; i++) {
      if (this.cards[i].value==="King"){
        k++;
      } else if (this.cards[i].value==="Queen") {
        q++;
      } else if (this.cards[i].value==="Jack") {
        j++;
      } else {
        a++;
      }
    }

    if (k === 4 || q === 4 || j === 4 || a === 4) {
      this.winner = true;
    }
  }


}

const suits = ['Heart', 'Diamon', 'Spade', 'Club'];
const values = ['Jack', 'Queen', 'King', 'Ace'];
const game = [];
const deck = shuffleDeck(createDeck());

let player01 = new Player('Jack', 25, deck),
    player02 = new Player('Rose', 28, deck),
    player03 = new Player('Luis', 36, deck),
    player04 = new Player('Lily', 18, deck); //player created

game.push(player01);
game.push(player02);
game.push(player03);
game.push(player04); //game created;


//create a deck with 16cards
function createDeck() {
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
function shuffleDeck(deck) {
  for (let i = 0; i < deck.length; i++) {
    let randomIdx = Math.trunc(Math.random() * deck.length);
    let tmp = deck[randomIdx];
    deck[randomIdx] = deck[i];
    deck[i] = tmp;
  }
  return deck;
}

//sort cards for player
function sortCards(player) {
  const cards = player.cards;
  
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

function checkForValue(game) {
  for (let i = 0; i < game.length; i++) {
    
  }
  const value = player.getMostFrequentValue();
}




