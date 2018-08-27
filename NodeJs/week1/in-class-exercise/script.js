const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
console.time('start');

const promise1 = readFile('file1.txt', 'utf8');
const promise2 = readFile('file2.txt', 'utf8');

Promise.all([promise1, promise2])
  .then((res) => {
    console.log(res);
    writeFile('message.txt', res.join('\n'));
  })
  .then(() => console.log('files have been written'));
console.timeEnd('start');