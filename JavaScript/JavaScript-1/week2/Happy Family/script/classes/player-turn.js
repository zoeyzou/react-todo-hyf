export class Playerturn {
  constructor(currentPlayer) {
    this.currentPlayer = currentPlayer;
    this.turnOver = false;
  }

  static checkCardFrequency(player) {
    const valueArray = player.cards.map(card => card.value);
    const cardSet = {};
    let count = 0, 
        currentCount = 1, 
        frequentValue, 
        target;
    
    for (let i = 0; i < valueArray.length - 1; i++) {
      target = valueArray[i];
      
      for(let j = i + 1; j < valueArray.length; j++) {
        if (valueArray[j] == target && frequentValue !== target) {
          currentCount++;
        }
      }
      if (count < currentCount) {
        count = currentCount;
        currentCount = 1;
        frequentValue = target;
      }
    } //nested for loop to compare each values

    cardSet.value = frequentValue;
    cardSet.count = count;

    return cardSet;
  }

  askForCard(target) {
    const frequentCard = Playerturn.checkCardFrequency(this.currentPlayer);
    const frequentValue = frequentCard.value;
    const targetCards = target.cards;

    targetCards.forEach(card => {
      let targetedCard ;
      if (card.value == frequentValue) {
        const index = targetCards.indexOf(card);
        targetedCard = targetCards.splice(index, 1);
        this.currentPlayer.cards.push(targetedCard[0]);
        console.log(targetedCard[0].value);
        this.turnOver = true;
        return targetedCard;
        
        
        
      }
      
    });

    if (!this.turnOver) {
      return 1;
    }
  }
  
}