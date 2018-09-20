/**
 * @param {string} name string
 * @param {number} difficulty number
 */
class Course {
  constructor(name, difficulty) {
    if (name === null || typeof name !== 'string') throw new Error('Course name should be a string');
    if (difficulty === null || typeof difficulty !== 'number') throw new Error('Course difficulty should be a number');

    this.name = name;
    this.difficulty = difficulty;
  }

}

// /**
//  * @param {Course} course instance of course
//  */
// class CourseList {
//   constructor(api) {
//     this.api = api;
//   }

//   async getAllCourses() {
//     const courses = await this.api.getCoursesPromise();
//     console.log(courses);
//     console.log(typeof courses);
//     return courses;
//   }

//   getCourseById(id) {
//     if (!this._courses[id]) throw new Error('Course with this id does not exist.');
//     return this._courses[id];
//   }

//   addCourse(course) {
//     if (!(course instanceof Course)) throw new Error('New course should be an instance of Course class.');
//     this._courses.push(course);
//     return this._courses;
//   }

//   deleteCourse(id) {
//     if (this._courses[id]) {
//       this._courses.splice(id, 1);
//       return this._courses;
//     } else {
//       throw new Error('This id does not exist in course list.');
//     }
//   }

//   /**
//    * 
//    * @param {number} id index number
//    * @param {object} editEntry an object to patch the course
//    */
//   editCourse(id, editEntry) {
//     if (this._courses[id]) {
//       this._courses[id] = {...this._courses[id], ...editEntry};
//       return this._courses[id];
//     } else {
//       throw new Error('This id does not exist in course list.');
//     }
//   }
// }

module.exports = { Course };