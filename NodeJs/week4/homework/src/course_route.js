const { Router } = require('express');
const { Course } = require('./course');
const DbInterface = require('./databaseInterface');

const courseAPI = new DbInterface(__dirname + '/db.json');
// const courses = new CourseList(courseAPI);

const courseRoute = Router()
  .get('/', async (req, res) => {
    try {
      console.log(Object.keys(req.query).length !== 0);
      if (Object.keys(req.query).length !== 0) {
        console.log(courseAPI.validateQueryByCourseContent(req.query));
        if (!courseAPI.validateQueryByCourseContent(req.query)) {
          console.log('This is not valid query.');
          return res.status(400).end('This is not a valid query');
        }
        return res.send(await courseAPI.getCoursesByQueryPromise(req.query))
      }
      res.send(await courseAPI.getCoursesPromise())
    } catch(error) {
      console.log(error);
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
      if (!req.body.name || !req.body.difficulty || req.body.fun) {
        res.send('The name and difficulty are needed to create and post a course.');
        throw new Error('The name and difficulty are needed to create and post a course.');
      }
      const newCourse = new Course(req.body.name, req.body.difficulty, req.body.fun);
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