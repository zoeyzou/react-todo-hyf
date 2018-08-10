// Exercise


/*

Exercise 1

ONLY using promises! 
a. Wait for 3 seconds, then fetch movies using this url https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json and log the result out

b. When that is done, fetch the reddit programmerhumor posts. 'https://www.reddit.com/r/ProgrammerHumor.json'
  
Use chaining instead of 

*/

const movieUrl = `https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json`;
const redditUrl = `https://www.reddit.com/r/ProgrammerHumor.json`;
const setTimeoutPromise = new Promise((resolve, reject) => {
  setTimeout(()=>{
    console.log('3 seconds has passed');
    resolve();
  }, 3000);
});

setTimeoutPromise
  .then(() => {
    const movieListPromise = fetch(movieUrl);
    return movieListPromise;
  })
  .catch((error) => console.log(error))
  .then((data) => {
    return data.json();
  })
  .catch((error) => console.log(error))
  .then(movieList => {
    console.log(movieList);
    const redditPostPromise = fetch(redditUrl);
    return redditPostPromise;
  })
  .catch((error) => console.log(error))
  .then((data) => {
    return data.json();
  })
  .catch((error) => console.log(error))
  .then(redditPost => {
    console.log(redditPost);
  })
  .catch((error) => console.log(error));




// For closures:
// Exercise 2. Fill in the blank functions using closures
function createClass(students, roomNumber, time) {
  return {
    addStudent(name) {
      students.push(name);
    },
    removeStudent(name) {
      students.splice(indexOf(name), 1);
    },
    removeAllStudents() {
      students.splice(0, students.length);
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
    changeTime(newTime) {
      time = newTime;
      return time;
    },
    isStudentInClass(newStudent) {
      return students.includes(newStudent);
    },
    getRoomNumber() {
      return students.roomNumber;
    },
    changeRoomNumber(newRoomNumber) {
      roomNumber = newRoomNumber;
      return roomNumber;
    },
    formatStudentInfo() {
      return students.map(student => `${student} moved in ${roomNumber} in ${time}`);
    }
  }
}

const javascript3 = createClass(['Ahmad', 'Jenny', 'Børge'], '3A', '12-16');

console.log(javascript3.getTime());
console.log(javascript3.getNumberOfStudents());
javascript3.addStudent('Birger');
console.log(javascript3.getStudents());
console.log(javascript3.getNumberOfStudents());
console.log(javascript3.getTime());
console.log(javascript3.changeTime('1-3'));
console.log(javascript3.isStudentInClass('dude'));
console.log(javascript3.formatStudentInfo());
console.log(javascript3.changeRoomNumber('1B'));
console.log(javascript3.formatStudentInfo());