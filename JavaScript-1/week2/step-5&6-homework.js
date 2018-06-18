//1. Create a function that takes 3 arguments and returns the sum of the these arguments.
function sum(a, b, c) {
  return a + b + c;
}

//2. Create a function named colorCar that receives a color, and prints out, 'a red car' for example.
function colorCar(color) {
  console.log(`a ${color} car`);
}

//3. Create an object and a function that takes the object as a parameter and prints out all of its properties and values.
const obj = {
  name: 'zoey',
  gender: 'female',
  loveCat: true,
  height: 162
};

function showObj(obj) {
  for (let prop in obj) {
    console.log(prop + ": " + obj[prop]);
  }
}

//4. Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. And prints 'a blue motorbike' for example when called as vehicleType("blue", 2)
function vehicleType(color, code) {
  let type;
  switch(code) {
    case 1:
      type = 'car';
      break;
    case 2:
      type = 'motorbike';
      break;
    default:
      throw `${code} is not supported code.`;
  }
  console.log(`one ${color} ${type}`);
}
vehicleType('blue', 2);