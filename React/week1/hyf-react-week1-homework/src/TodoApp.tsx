import * as React from 'react';
import FullWidthTitle from './FullWidthTitle/FullWidthTitle';
import { Todo } from './models/todo';
import './TodoApp.css';
import TodoCard from './TodoCard/TodoCard';

class App extends React.Component {
  private todos: Todo[] = [
    new Todo('Wed Sep 13 2017', 'Get out of bed'),
    new Todo(
      'Thu Sep 14 2017',
      'Brush teeth',
      false,
      'Surely you would need to brush teeth'
    ),
    new Todo('Fri Sep 15 2017', 'Eat breakfast')
  ];

  private AllTodos = this.todos.map((todo, index) => (
    <TodoCard
      key={index}
      date={todo.date}
      todo={todo.todo}
      comment={todo.comment}
    />
  ));

  public render() {
    return (
      <div className="App">
        <FullWidthTitle
          title={'Todo App'}
          bgTheme={'lightGray'}
          subTitle={'A simple todo app that does not do anything...yet.'}
        />
        <div className="flexContainer">{this.AllTodos}</div>
      </div>
    );
  }
}

export default App;
