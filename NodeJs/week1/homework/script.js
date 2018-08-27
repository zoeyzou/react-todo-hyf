const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

const regex = /the/gi;

console.time('start-async');
const p1 = readFile('fs1.txt', 'utf8');
const p2 = readFile('fs2.txt', 'utf8');
const p3 = readFile('fs3.txt', 'utf8');
const p4 = readFile('fs4.txt', 'utf8');

Promise.all([p1, p2, p3, p4])
  .then(res => {
    const found = res.join(',').match(regex);
    console.log('Found THE in 4 files asynchronously ' + found.length + ' times.');
    console.timeEnd('start-async');
  })


// result:
// Found THE in 4 files asynchronously 27 times.
// start-async: 6.535ms


console.time('start-sync');
const f1 = fs.readFileSync('fs1.txt', 'utf8');
const f2 = fs.readFileSync('fs2.txt', 'utf8');
const f3 = fs.readFileSync('fs3.txt', 'utf8');
const f4 = fs.readFileSync('fs4.txt', 'utf8');
const foundSync = (f1 + f2 + f3 + f4).match(regex);
console.log('Found THE in 4 files synchronously ' + foundSync.length + ' times');
console.timeEnd('start-sync');

// result
// Found THE in 4 files synchronously 27 times
// start-sync: 4.377ms


class Person {
  // your code here
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  addPhone(number) {
    this.phone = number;
  }

  call() {
    if (!this.phone) {
      console.log(this.name + " has no phone number saved.");
      return;
    }
    console.log("Calling Jimmy at " + this.phone);
  }

  birthday() {
    console.log("Wishing Jimmy a happy " + (this.age + 1) + "th birthday!");
  }
};

// remember to write a constructor function
let jimmy = new Person("Jimmy", 28);

jimmy.addPhone("55551234");

jimmy.call();
// should say "Calling Jimmy at 55551234..."

jimmy.birthday();
// should say "Wishing Jimmy a happy 29th birthday!"

let jill = new Person("Jill");

jill.call();
// should say "Jill has no phone number saved."