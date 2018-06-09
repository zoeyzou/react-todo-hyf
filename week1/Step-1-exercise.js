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

// 6. If x equals 7, and the only other statement is x = x % 3, what would be the new value of x?
let x = 7;
x = x % 3;
console.log(x); // 1

// 7. Write a program to answer the following questions:
// Can you store multiple types in an array? Numbers and strings?
// Can you compare inifities? (Not in Eyad's world) - does 6/0 == 10/0? How can you test this?
function arrayTypeCheck(array) {
  type = [];
  for (let element of array) {
    if (!type.includes(typeof element)) {
      type.push(typeof element);
    }
  }

  if (type.length > 0) {
    console.log("Yes, you can store different types in a array!");
  }
  else {
    console.log("I'm afraid that you cannot store different types in a array");
  }
}

function compareInfinity(x, y) {
  let x1 = x / 0, y1 = y / 0;
  if (x1 + y1 > 0 || x1 + y1 < 0) {
    if (x1 == y1) {
      console.log("Infinity or -Infinity equals to itself respectively.")
    }
    else {
      console.log("Infinity or -Infinity are not comparable.")
    }
  }
  else {
    console.log("Infinity and -Infinity are not comparable.");
  }
}

let arr = ["one", 1, ["ONE"]];
arrayTypeCheck(arr); //Yes, you can store different types in a array!
let x = 5, y = 10;
compareInfinity(x, y); //Infinity or -Infinity equals to itself respectively.