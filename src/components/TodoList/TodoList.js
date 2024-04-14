import './TodoList.scss';

const TodoList = ({ todos }) => (
  <ul className="TodoList">
    {todos.map(todo => (
      <li key={todo.id} className="TodoList__item">
        <p className="TodoList__text">{todo.text}</p>
        <button className="TodoList__btn">Удалити</button>
      </li>
    ))}
  </ul>
);

export default TodoList;
