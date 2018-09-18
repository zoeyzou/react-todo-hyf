const util = require('util');
const fs = require('fs');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

class DatabaseInterface {

  /**
   * 
   * @param {string} path local json database file path
   */
  constructor(path) {
    this.filePath = __dirname + path;
  }

  getCoursesPromise() {
    return readFile(this.filePath, 'utf8')
      .then(res => {
        return JSON.parse(res);
      })
      .catch(err => console.log(err));
  }
  /**
   * 
   * @param {Course} course instance of Course Class
   */
  postSingleCoursePromise(course) {
    return this.getCoursesPromise()
      .then(courses => {
        if (courses.some(item => item.name === course.name)) {
          throw new Error('This course exists in database, please use edit if you want to change it.');
        }

        courses.push(course);
        return writeFile(this.filePath, JSON.stringify(courses), 'utf8');
      })
      .then(data => this.getCoursesPromise())
      .catch(err => console.log(err));
  }

  postMultipleCoursesPromise(courses) {
    return this.getCoursesPromise()
      .then(allCourses => {
        allCourses = [...allCourses, ...courses];
        return writeFile(this.filePath, JSON.stringify(courses), 'utf8');
      })
      .then(data => this.getCoursesPromise())
      .catch(err => console.log(err));
  }

  editCoursePromise(id, dataEntry) {
    return this.getCoursesPromise()
      .then(courses => {
        if (!courses[id]) throw new Error('This id does not exist in course list.');
        courses[id] = {...courses[id], ...dataEntry};
        return this.postMultipleCoursesPromise(courses);
      })
      .catch(err => console.log(err));
  }

  deleteCoursePromise(id) {
    return this.getCoursesPromise()
      .then(courses => {
        if (!courses[id]) throw new Error('This id does not exist in course list.');
        courses.splice(id, 1);
        return this.postMultipleCoursesPromise(courses);
      })
      .catch(err => console.log(err));
  }
}

module.exports = DatabaseInterface;
// console.log(__dirname);
// const db = new DatabaseInterface(__dirname + '/db.json');
// db.deleteCoursePromise(0).then(res => console.log(JSON.stringify(res)));