* Complete the homework.js script so that you have a functional node application. In particular, add the necessary code to the functions:
  - addNewTask, to add a new task
  - changeTaskTitle, to change the title of a task
  - changeTaskDueDate, to change the due date of a task
  - changeTaskStatus, to change the status of a task
  - markTaskAsCompleted, to mark a task as completed
  - deleteTask, to delete a task
  - deleteUser, to delete a user
* Create a new database containing the following tables:
  - Class: with the columns: id, name, begins (date), ends (date)
  - Student: with the columns: id, name, email, phone, class_id (foreign key)
* If you are done with the above tasks, you can continue with these advanced tasks:
  - Create an index on the name column of the student table.
  - Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations).