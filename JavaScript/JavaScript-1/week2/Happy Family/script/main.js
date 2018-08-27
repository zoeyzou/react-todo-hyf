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
import {suits, values, names} from './classes/data.js';
import {Deck} from './classes/deck.js';
import {Player} from './classes/player.js';
import {Game} from './classes/game.js';
import {Playerturn} from './classes/player-turn.js';

// const deck = new Deck(suits, values);
// const players = Player.createPlayers(names, 4);
// const game = new Game(deck, players);

// game.dealCards(4);



// console.log(game);
const newGameButton = document.querySelector('#new-game-button');
const playButton = document.querySelector('#play-button');
const restartButton = document.querySelector('#restart-button');
const askCardButton = document.querySelector('#ask-card-button');
const playerArea = document.querySelectorAll('.player');

let game, deck, players, askedPlayer, playerTurn, currentPlayerIndex,askedPlayerIndex;

newGameButton.addEventListener('click', function() {
  
  newGameButton.style.display = 'none';
  playButton.style.display = 'inline';
  restartButton.style.display = 'inline';

  deck = new Deck(suits, values);
  players = Player.createPlayers(names, 4);
  game = new Game(deck, players);
  game.dealCards(4);
  
  
  showPlayer(playerArea, game.players);
  showCurrentPlayer(game.currentPlayer, game.players, playerArea);

});

playButton.addEventListener('click', function() {
  playerTurn = new Playerturn(game.currentPlayer);
  //index = game.players.indexOf(game.currentPlayer);
  currentPlayerIndex = game.players.indexOf(game.currentPlayer);
  askedPlayerIndex=currentPlayerIndex + 1;
  askedPlayer = game.players[askedPlayerIndex];

  
  playButton.style.display = 'none';
  askCardButton.style.display = 'inline';
  showAskedPlayer(askedPlayer, players, playerArea);
    
});

askCardButton.addEventListener('click', function() {
  let newaskedplayer= game.players[askedPlayerIndex];
  let newcard= playerTurn.askForCard(newaskedplayer);
  console.log(newcard);
  console.log(newaskedplayer);
  console.log(game.currentPlayer);
  // showCards()
  if(newcard){
    askedPlayerIndex++;
    console.log(askedPlayerIndex);
    showAskedPlayer(newaskedplayer, players, playerArea);
    console.log(newaskedplayer);
  }
});

function showAskedPlayer(askedPlayer, players, playerArea) {
  const index = players.indexOf(askedPlayer);
  playerArea[index].classList.add('asked-player');
}

function showPlayer(playerArea, players) {
  for (let i = 0; i < playerArea.length; i++) {
    let content = showCards(players[i].cards);
    playerArea[i].innerHTML = 
      `<h2>${players[i].name}, ${players[i].age} yrs old</h2>
      <p>${content}</p>`;
  }
}

function showCurrentPlayer(currentPlayer, players, playerArea) {
  const index = players.indexOf(currentPlayer);
  playerArea[index].classList.add('current-player');
}

function showCards(cards) {
  let content = '';
  cards.forEach(card => {
    content += `${card.value} of ${card.suit} <br>`;
  });
  return content;
}



