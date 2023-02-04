// 할일들을 나열해주는 역할

function TodoList({ todos, dispatch }) {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <TodoItem todo={todo} dispatch={dispatch} />
        ))}
      </ul>
    </div>
  );
}

function TodoItem({ todo, dispatch }) {
  const handleRemove = (id) => {
    if (window.confirm("삭제하시겠습니까?")) dispatch({ type: "remove", id });
  };

  return (
    <li>
      <span>{todo.text}</span>
      <button onClick={() => handleRemove(todo.id)}>삭제</button>
    </li>
  );
}

export default TodoList;
