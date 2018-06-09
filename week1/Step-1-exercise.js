// 1. Declare a variable x and initialize it with an integer.
let x = 10; //for reassignable variable
const x = 20; // for non-reassignable variable

// 2. How do you round the number 7.25, to the nearest integer?
Math.round(7.25);

// 3. Create a array called colors with the strings red, green and blue inside.
const colors = ["red", "green", "blue"];

// 4. How can you find the length of the string you just created?
let strLength = colors.length;
console.log(strLength);

// 5. Write a program that checks the types of two variables and prints out SAME TYPE if they are the same type. 
let x = 10, y =  "red";
function checkType(x, y) {
  if (typeof x == typeof y) {
    console.log("SAME TYPE");
  }
  else {
    console.log("Oops, they are different types");
  }
}
checkType(x, y);