import { Contact } from './contact';

class StudentContact extends Contact {
  /**
   * 
   * @param {{name: string, phone: string}} StudentContact
   */
  constructor(name, phone) {
    super(name, phone);
    this._fullCourseList = ['html', 'css', 'javascript', 'nodejs', 'database', 'react', 'final project'];
    this._finishedCourseList = [];
    this._progress = 0;
  }

  get progress() {
    return this._progress;
  }

  _updateProgress() {
    this._progress = (this._finishedCourseList.length / this._fullCourseList.length * 100).toFixed(2) + '%';
  }

  get finishedCourseList() {
    return this._finishedCourseList;
  }

  get fullCourseList() {
    return this._fullCourseList;
  }

  set fullCourseList(course) {
    if (typeof course !== 'string') {
      throw 'course name should be a string.';
    }
    this._fullCourseList.push(course);
    this._updateProgress();
  }

  addCourseToFinishedList(course) {
    const newCourse = course.toLowerCase();
    if (this._fullCourseList.indexOf(newCourse) === -1) {
      throw `Error: the input course is not in the course list. The Course list is 'html', 'css', 'javascript', 'nodejs', 'database', 'react', 'final project', please add the correct one.`;
    }
    this._finishedCourseList.push(newCourse);
    this._updateProgress();
  }
}

/**
 * @param {{name: string, phone: string}} ContactTeacher
 */
class ContactTeacher extends Contact {
  constructor(name, phone) {
    super(name, phone);
    this._studentList = [];
  }

  addStudentContact(student) {
    if (!(student instanceof StudentContact)) throw `Error: this student is not of type studentcontact`;
    if (this._checkDuplicate(student.phone)) throw `The student exist in this teacher's list, please add another one.`;

    this._studentList.push(student);
  }

  showStudents() {
    return this._studentList;
  }

  _checkDuplicate(phone) {
    return this._studentList.some(student => student.phone === phone);
  }

}

const zoey = new StudentContact('Zoey', '+4522334455');
console.log(zoey);
/*
  StudentContact {
    name: 'Zoey',
    phone: '+4522334455',
    _fullCourseList:
    [ 'html',
      'css',
      'javascript',
      'nodejs',
      'database',
      'react',
      'final project' ],
    _finishedCourseList: [],
    _progress: 0 }
*/
zoey.addCourseToFinishedList('html');
console.log(zoey);
/*
  StudentContact {
    name: 'Zoey',
    phone: '+4522334455',
    _fullCourseList:
    [ 'html',
      'css',
      'javascript',
      'nodejs',
      'database',
      'react',
      'final project' ],
    _finishedCourseList: [ 'html' ],
    _progress: '14.29%' }
*/

const marco = new ContactTeacher('Marco', '+4599987778');
console.log(marco);
// ContactTeacher { name: 'Marco', phone: '+4599987778', _studentList: [] }
marco.addStudentContact(zoey);
console.log(marco);
/*
  ContactTeacher {
    name: 'Marco',
    phone: '+4599987778',
    _studentList:
    [ StudentContact {
        name: 'Zoey',
        phone: '+4522334455',
        _fullCourseList: [Array],
        _finishedCourseList: [Array],
        _progress: '14.29%' } ] }
*/
