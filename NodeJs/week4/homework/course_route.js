const { Router } = require('express');
const { Course, CourseList } = require('./course');

const courses = new CourseList(new Course('HTML', 3));

const courseRoute = Router()
  .get('/', (req, res) => {
    res.send(courses.getAllCourses());
  })
  .get('/:id', (req, res) => {
    try {
      res.send(courses.getCourseById(req.params.id))
    } catch (error) {
      res.status(404).end('The course with this id does not exist.')
    }
  })
  .post('/', (req, res) => {
    try {
      const newCourse = new Course(req.body.name, req.body.difficulty);
      res.send(courses.addCourse(newCourse));
    } catch(error) {
      res.status(403).end(error);
    }
  })
  .patch('/:id', (req, res) => {
    try {
      res.send(courses.editCourse(req.params.id, req.body));
    } catch(error) {
      res.status(403).end('The id does not exists');
    }
  })
  .delete('/:id', (req, res) => {
    try {
      res.send(courses.deleteCourse(req.params.id));
    } catch(error) {
      res.status(404).end('The id does not exist');
    }
  })


module.exports = courseRoute;