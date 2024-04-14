import React, { Component } from 'react';
import TodoList from './components/TodoList/TodoList';
import initialTodos from '../src/todos.json';

class App extends Component {
  state = {
    todos: initialTodos,
  };

  render() {
    const { todos } = this.state;

    return (
      <div>
        <h1>Перелік завдань</h1>
        <TodoList todos={todos} />
      </div>
    );
  }
}

export default App;
