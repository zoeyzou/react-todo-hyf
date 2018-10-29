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

  private AllTodos = this.state.todoList.map((todo, index) => (
    <TodoCard
      key={index}
      date={todo.date}
      todo={todo.todo}
      comment={todo.comment}
    />
  ));

  public inputHandler = (e: React.SyntheticEvent<HTMLInputElement>) => {
    this.setState({ inputValue: e.currentTarget.value });
  };

  public clickHandler = () => {
    const todoList = this.state.todoList;
    const id = todoList.length + 1;
    const date = new Date(Date.now()).toDateString();
    const newTodo = new Todo(id, date, this.state.inputValue);
    const newTodos = todoList.concat(newTodo);
    this.setState({ todoList: newTodos });
  };

  public render() {
    return (
      <div className="App">
        <FullWidthTitle
          title={'Todo App'}
          bgTheme={'gray'}
          subTitle={'A simple todo app that does not do anything...yet.'}
          component={
            <StandardInput
              buttonLabel="Add"
              initialValue={this.state.inputValue}
              inputHandler={this.inputHandler}
              clickHandler={this.clickHandler}
            />
          }
        />
        <div className="flexContainer">{this.AllTodos}</div>
      </div>
    );
  }
}

export default TodoApp;
