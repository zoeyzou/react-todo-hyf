// Exercise 2
// We continue with the createClass example
// Now instead of students just being represented by a name
// They should be represented by an object with the following properties:
/*
Name, age, wallet, grade

And the following methods:
AddMoneyToBalance
changeNamen  
changeAge
checkBalance

And another object:
Wallet
properties
balance
transactions

*/

function createClass(students, roomNumber, time) {
  return {
    addStudent(name) {
        students.push(name);
    },
    removeStudent(name) {

    },
    removeAllStudents() {
        
    },
    getStudents() {
        return students;
    },
    getNumberOfStudents() {
        return students.length;
    },
    getTime() {
        return time;
    },
    changeTime() {

    },
    isStudentInClass() {

    },
    checkIfStudentHasEnoughMoney() {

    },
    sendWarningIfNotEnoughBalance() {
        // go through all students and check their balance. 
    },
    getTotalGrading() {

    },
  }
}

/*
Exercise 3

ONLY using promises!

Send a fetch request to https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json the same time you send a request to https://www.reddit.com/r/ProgrammerHumor.json

When they have both returned log out the results and then wait for 3 seconds. Using chaining.

*/

const githubUrl = 'https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json';

const redditUrl = 'https://www.reddit.com/r/ProgrammerHumor.json';

const waitFor3SencondsPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 3000);
});

const githubPromise = fetch(githubUrl);

const redditPromise = fetch(redditUrl);

// Promise.all([githubPromise, redditPromise])
//   .then((data) => {
//     console.log(data);

//     return waitFor3SencondsPromise
//   })
//   .then(() => {

//     console.log('3 have elapsed')
//   });

waitFor3SencondsPromise
  .then(() => {
    console.log('Another 3 seconds has passed');
    return Promise.all([githubPromise, redditPromise]);
  })
  .then((data) => {
    return data.json();
  })
  .then((list) => {
    console.log(list);
  })
