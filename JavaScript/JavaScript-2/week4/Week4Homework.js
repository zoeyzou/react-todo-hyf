// /**
//  * Get random integer between two numbers, found here: https://stackoverflow.com/a/7228322
//  * @param {integer} min - The min number
//  * @param {integer} max - The max number
//  * @returns {Number} Random number between min and max
//  */

function randomIntFromInterval(min, max) {
  let random = Math.floor(Math.random() * (max - min + 1) + min);
  return random;
}


// /**
// * Get an array with car objects with random color and speed
// * @param {integer} numberOfCars - The number of cars 
// * @returns {array} Array containing the car objects
// */

function generateCars(numberOfCars) {
  const cars = [];

  const carMakes = ['Honda', 'BMW','Fiat','Skoda','Volvo'];
  const carColors = ['lightgrey', 'lightcyan','lightyellow','lightgreen','lightcoral','lightpink'];
  
  for (let i = 0; i < numberOfCars; i++) {
      const car = {};
      const randomMakeIndex = randomIntFromInterval(0, carMakes.length - 1);
      const randomColorIndex = randomIntFromInterval(0, carColors.length - 1);

      car.make = carMakes[randomMakeIndex];
      car.color = carColors[randomColorIndex];
      car.speed = randomIntFromInterval(0, 100);

      cars.push(car);
  }

  return cars;
}

let generatedCars = generateCars(10);
console.log('-> generated cars: ');
console.log(generatedCars);

//1.1: Cars with speeds between 30 and 60
let slowCars = generatedCars.filter(car => car.speed > 30 && car.speed < 60);
console.log('-> slow cars: ');
console.log(slowCars);

//1.2: The makes of the cars that are not lightyellow
let nonLightyellowCars = 
    generatedCars.filter(car => car.color !== 'lightyellow').map(car => car.make);
console.log('-> non light yellow cars: ');
console.log(nonLightyellowCars);

let nonRepeatedMake = 
    nonLightyellowCars.filter((elem, index, self) => index == self.indexOf(elem));
    //found the solution online, but not yet understood
    //solution: https://codehandbook.org/how-to-remove-duplicates-from-javascript-array/
console.log('-> non-repeated make: ');
console.log(nonRepeatedMake);

//1.3 Change to Danish

function modifyKey(oldCars) {
  let car = {};
  car['maerke'] = oldCars.make;
  car['fart'] = oldCars.speed;
  car['farve'] = oldCars.color;
  return car;
}

let mapNewCars = generatedCars.map(modifyKey);
console.log('-> map new cars: ');
console.log(mapNewCars);


