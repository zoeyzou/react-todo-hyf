const fs = require('fs');
const mysql = require('mysql');

const config = JSON.parse(fs.readFileSync('../in-class-exercise/config-secret.json'));

const pool = mysql.createPool({
  host: config.host,
  user: config.user,
  password: config.password,
  port: config.port,
  database: config.database
});

const addNewTask = function(title, description, created, updated, dueDate, statusID, userID) {
  const query = 'INSERT INTO task (title, description, created, updated, due_date, status_id, user_id) VALUE (?, ?, ?, ?, ?, ?, ?)';
  const columns = [title, description, created, updated, dueDate, statusID, userID];

  queryHelper(pool, query, columns);
};

// testing data
// addNewTask('test at night', 'this is a test at night', '2018-10-18 12:23:54', '2018-10-18 12:23:54', '2018-11-1 12:23:54', 1, 1);

const changeTaskTitle = function(taskID, newTitle) {
  const query = 'UPDATE task SET ??=? WHERE ??=?';
  const columns = ['task.title', newTitle, 'task.id', taskID];

  queryHelper(pool, query, columns);
};

// testing data
// changeTaskTitle(39, 'this is definitely 39th task');

const changeTaskDueDate = function(taskID, newDueDate) {
  const query = 'UPDATE task SET ??=? WHERE ??=?';
  const columns = ['task.due_date', newDueDate, 'task.id', taskID];
  
  queryHelper(pool, query, columns);
};

// testing data
// changeTaskDueDate(39, '2019-01-01 00:00:00');

const changeTaskStatus = function(taskID, newStatus) {
  const query = 'UPDATE task SET ??=? WHERE ??=?';
  const columns = ['task.status_id', newStatus, 'task.id', taskID];

  queryHelper(pool, query, columns);
};

//testing Data
// changeTaskStatus(39, 5);

const markTaskAsCompleted = function(taskID) {
  const query = 'UPDATE task SEt task.status_id=(select id from status WHERE status.name=?) WHERE task.id=?';
  const columns = ['Done', taskID];

  queryHelper(pool, query, columns);
};

// testing data
markTaskAsCompleted(34);

const deleteTask = function(taskID) {
  const query = 'DELETE FROM task WHERE id=? LIMIT 1';
  const columns = [taskID];

  queryHelper(pool, query, columns);
};

// testing data
// deleteTask(39);

function queryHelper(pool, query, columns) {
  pool.getConnection((err, connection) => {
    if (err) {
      throw new Error(err);
    }

    connection.query(query, columns, (error, results, fields) => {
      if (error) {
        throw new Error(error);
      }
  
      console.log(results);
      console.log(fields);
    });
  });
}