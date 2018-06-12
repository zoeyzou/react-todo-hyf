/*
  Today is Sunday and you ask your friend in how many days you are meeting. If the friend says
  I will see you in 9 days. The output should be Tuesday.

  You should get the today's day from the system.

  So typical console output is:

  Today is: Sunday 
  How many days to meet : 9
  We are meeting on : Tuesday

  Hint: ask each other for help/ask the right questions to the mentors.
 */

 //create a function to calculate day
function calculateDay(number) {
  let n = number + dd;

  if (n > 7) {
    return week[n % 7];
  }
  else {
    return week[n];
  }
}


let today = new Date(), //get current date
    dd = today.getDay(), //get index
    week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
            'Friday', 'Saturday'], //set week day array
    number = 9; //to give a meeting day

calculateDay(number); //call the function

console.log('Today is: ' + week[dd]);
console.log('How many days to meet: ' + number);
console.log("We are meeting on " + calculateDay(9));