

export class Player {
  constructor(names) {
    this.name = Player.getName(names);
    this.age = Player.getAge();
  }

  static getAge() {
    const age = Math.round(Math.random() * 60 + 18);
    return age;
  }

  static getName(names) {
    const length = names.length,
          randomIdx = Math.floor(Math.random() * length);
    return names[randomIdx];    
  }

  static createPlayers(names, count) {
    const players = [];
    let i = 0; //player number
    for (i; i < count; i++) {
      let player = new Player(names);
      players.push(player);
    }
    return players;
  }; //To create players

  // checkCardFrequency() {
  //   const valueset = this.player.cards.map(card => card.value);
  //   let count = 0, 
  //       currentCount = 1, 
  //       frequentValue, 
  //       target;
    
  //   for (let i = 0; i < valueset.length - 1; i++) {
  //     target = valueset[i];
      
  //     for(let j = i + 1; j < valueset.length; j++) {
  //       if (valueset[j] == target && frequentValue !== target) {
  //         currentCount++;
  //       }
  //     }
  //     if (count < currentCount) {
  //       count = currentCount;
  //       currentCount = 1;
  //       frequentValue = target;
  //     }
  //   } //nested for loop to compare each values
  //   return frequentValue;
  // }
}