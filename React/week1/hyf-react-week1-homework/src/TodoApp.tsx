import * as React from 'react';
import FullWidthTitle from './FullWidthTitle/FullWidthTitle';
import { Todo, todos } from './models/todo';
import StandardInput from './StandardInput/StandardInput';
import './TodoApp.css';
import TodoCard from './TodoCard/TodoCard';

type TodoAppState = {
  inputValue: string;
  todoList: Todo[];
};

class TodoApp extends React.Component<{}, TodoAppState> {
  public state = {
    inputValue: '',
    todoList: todos
  };

  public inputHandler = (e: React.SyntheticEvent<HTMLInputElement>) => {
    this.setState({
      inputValue: e.currentTarget.value
    });
  };

  public clickHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (this.state.inputValue === '') {
      return;
    }
    const todoList = this.state.todoList;
    const id = todoList.length + 1;
    const date = new Date(Date.now()).toDateString();
    const newTodo = new Todo(id, date, this.state.inputValue);
    const newTodos = todoList.concat(newTodo);
    this.setState({ todoList: newTodos, inputValue: '' });
  };

  public onTodoClick = (id: number) => {
    const todoList = this.state.todoList.slice();
    const index = todoList.findIndex(item => item.id === id);
    todoList[index].isComplete = !todoList[index].isComplete;
    this.setState({ todoList });
  };

  public onTodoDelete = (id: number) => {
    const todoList = this.state.todoList.slice();
    const index = todoList.findIndex(item => item.id === id);
    todoList.splice(index, 1);
    this.setState({ todoList });
  };

  public render() {
    const { inputValue, todoList } = this.state;
    const inCompleteTodos = todoList.filter(todo => !todo.isComplete);
    return (
      <div className="App">
        <FullWidthTitle
          title={'Todo App'}
          bgTheme={'gray'}
          subTitle={'A simple todo app that does not do anything...yet.'}
          component={
            <StandardInput
              buttonLabel="Add"
              initialValue={inputValue}
              inputHandler={this.inputHandler}
              clickHandler={this.clickHandler}
              disableButton={inputValue === ''}
            />
          }
        />
        {!inCompleteTodos.length && (
          <div className="todoClear">Congratulations! All todos are clear.</div>
        )}
        <div className="flexContainer">
          {todoList.map((todo, index) => (
            <TodoCard
              key={index}
              id={todo.id}
              date={todo.date}
              todo={todo.todo}
              comment={todo.comment}
              isComplete={todo.isComplete}
              onClick={this.onTodoClick}
              onTodoDelete={this.onTodoDelete}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default TodoApp;
