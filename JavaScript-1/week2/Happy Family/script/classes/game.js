import { Playerturn } from "./player-turn.js";


export class Game {
  constructor(deck, players) {
    this.deck = deck;
    this.players = players;
    this.gameOver = false;
    this.currentPlayer = this.players[0];
  }

  dealCards(cardsNumber) {
    let i = 0,
        length = this.players.length;

    for (i; i < length; i++) {
      this.players[i]['cards'] = this.deck.dealCards(cardsNumber); //deal customized-number of cards to each player
    }
  }

  checkForGameEnd() {
    // this.curplayers.forEach(player => {
    //   let valueSet = this.checkCardFrequency(player);
    //   if (valueSet.count === 4) {
    //     this.gameOver = true;
    //   }
    // });

    const valueSet = Playerturn.checkCardFrequency(this.currentPlayer);
    if (valueSet.count === 4) {
      this.gameOver = true;
    }
  }

  static changePlayer(currentPlayer, players) {
    const playerNumber = players.length;
    const currentIndex = players.indexOf(currentPlayer);
    const newIndex = playerNumber % (currentIndex + 1); //% can count index 4 back to 0
    
    return players[newIndex];
  }

} 