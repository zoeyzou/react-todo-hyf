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
 
 
function calculateDay(inputDays, dayIndex, week) {
  
  const n =  dayIndex + inputDays;

  return week[n % 7];

}

const meetingDayButton = document.getElementById('meeting-day-button');
meetingDayButton.addEventListener("click", () => {
  const currentDate = new Date(); //get current date
  const dayIndex = currentDate.getDay(); //get index
  const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
  'Friday', 'Saturday']; //set week day array
  
  const inputDays = parseInt(document.getElementById('days-to-meet').value, 10);
  const meetingDay = calculateDay(inputDays, dayIndex, week);

  const text = `Today is ${week[dayIndex]}
                The amount of days to meet: ${inputDays}
                We are meeting on ${meetingDay}`;
  // const textNode = document.createTextNode(text);

  const textArea = document.getElementById('demo-area-1');
  textArea.innerText = text;
});

