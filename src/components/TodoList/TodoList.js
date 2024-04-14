import './TodoList.scss';

const TodoList = ({ todos, onDeleteTodo }) => (
  <ul className="TodoList">
    {todos.map(({ id, text }) => (
      <li key={id} className="TodoList__item">
        <p className="TodoList__text">{text}</p>
        <button className="TodoList__btn" onClick={() => onDeleteTodo(id)}>
          Удалити
        </button>
      </li>
    ))}
  </ul>
);

export default TodoList;
