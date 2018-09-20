const { Router } = require('express');
const { Course } = require('./course');
const DbInterface = require('./databaseInterface');

const courseAPI = new DbInterface(__dirname + '/db.json');
// const courses = new CourseList(courseAPI);

const courseRoute = Router()
  .get('/', async (req, res) => {
    try {
      res.send(await courseAPI.getCoursesPromise())
    } catch(error) {
      next(error)
    }
  })
  .get('/:id', async (req, res) => {
    try {
      res.send(await courseAPI.getCourseByIdPromise(req.params.id));
    } catch (error) {
      res.status(404).end('The course with this id does not exist.')
    }
  })
  .post('/', async (req, res) => {
    try {
      if (!req.body.name || !req.body.difficulty) {
        res.send('The name and difficulty are needed to create and post a course.');
        throw new Error('The name and difficulty are needed to create and post a course.');
      }
      const newCourse = new Course(req.body.name, req.body.difficulty);
      res.send(await courseAPI.postCoursesPromise(newCourse));
    } catch(error) {
      res.status(403).end(error);
    }
  })
  .patch('/:id', async (req, res) => {
    try {
      res.send(await courseAPI.editCoursePromise(req.params.id, req.body));
    } catch(error) {
      res.status(403).end('The id does not exists');
    }
  })
  .delete('/:id', async (req, res) => {
    try {
      res.send(await courseAPI.deleteCoursePromise(req.params.id));
    } catch(error) {
      res.status(404).end('The id does not exist');
    }
  })


module.exports = courseRoute;