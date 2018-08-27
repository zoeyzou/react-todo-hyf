// FreeCodeCamp Challenge Solution

// *Factorialize a Number*
// Return the factorial of the provided integer.
// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
// Factorials are often represented with the shorthand notation n!
// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

// solution:

function factorialize(num) {
  if (num === 0) {
    return 1;
  }
  
  var newArray = Array.from(new Array(num),(num,index) => index + 1);
  var sum = newArray.reduce(function(previousVal, currentVal) {
    return previousVal * currentVal;
  });

  return sum;
}

console.log('function factorialize: ' + factorialize(0));

// -------------------------------------------------------------------------
// *Check for Palindromes
// Return true if the given string is a palindrome. Otherwise, return false.
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
// Note
// You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.
// We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.
// We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".

// solution:

function palindrome(str) {
  // Good luck!
  //var newStr = str.replace(/\W/g, '').toLowerCase();
  var newStr = str.replace(/[^\w\s]|_/g, "").replace(/\s+/g, "").toLowerCase();
  var reversedStr = newStr.split('').reverse().join('');
  if (reversedStr === newStr) {
    return true;
  }
  else {
    return false;
  }
  
}

console.log('function palindrome: ' + palindrome("_eye"));

// -------------------------------------------------------------------------------------------
// *Find the Longest Word in a String*

// Return the length of the longest word in the provided sentence.
// Your response should be a number.

// solution:

function findLongestWord(str) {
  var strArray = str.split(" ");
  var newArray = strArray.map((index) => index.length);
  var length = newArray.sort((a, b) => b - a).shift();
  return length;
}

console.log('function findLongestWord: ' + findLongestWord("The quick brown fox jumped over the lazy dog"));