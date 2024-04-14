import React, { Component } from 'react';
import TodoList from './components/TodoList/TodoList';
import initialTodos from '../src/todos.json';

class App extends Component {
  state = {
    todos: initialTodos,
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({ todos: prevState.todos.filter(todo => todo.id !== todoId) }));
  };

  render() {
    const { todos } = this.state;

    const completedTodosCount = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );

    return (
      <div>
        <h1>Перелік завдань</h1>
        <p>Загальна кількість todo`шек: {todos.length}</p>
        <p>Кількість виконаних todo'шек: {completedTodosCount}</p>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
