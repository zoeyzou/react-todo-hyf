// step 1
let arr = [];
for( let i=1; i<=1000;i++){
    arr.push(i);
}

  // here please start your solution
  // using closures, functions and (map,filter,reduce)
const divisibleFactory = function(array){ 
  return {

    divisibleBy(number) {
      return array.filter(item => item % number === 0);
    },

    countDivisiblesByNumbers(numberArray) {
      return numberArray.reduce((accumulator, current) => {
        const divisiblesLength = this.divisibleBy(current).length; // get the array of all numbers divisibled by each current number
        accumulator.push(divisiblesLength);
        return accumulator;
      }, []);
    }

  };
}

const factory = divisibleFactory(arr);

const divisibleByThree = factory.divisibleBy(3);
console.log(divisibleByThree);
const divisibleByTen = factory.divisibleBy(10);
console.log(divisibleByTen);
const divisibleBy21 = factory.divisibleBy(21);
console.log(divisibleBy21);

let testNumberArray = [];
for( let i=1; i<=30;i++){
    testNumberArray.push(i);
}

const divisibles = factory.countDivisiblesByNumbers(testNumberArray);
console.log(divisibles);
