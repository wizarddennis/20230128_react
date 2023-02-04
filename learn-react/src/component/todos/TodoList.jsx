import React, { useMemo } from "react";

function countUndoneTodo(todos) {
  console.log("안한 일 세는 중....");
  return todos.filter((todo) => !todo.done).length;
}

// 할일들을 나열해주는 역할
function TodoList({ todos, onRemove, onToggle }) {
  //의존성 배열에 있는 값이 변했을 때에만 다시 연산한다.
  const undoneCount = useMemo(() => {
    return countUndoneTodo(todos);
  }, [todos]);

  console.log("렌더링....");

  return (
    <div>
      해야할 일 = {undoneCount}
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onRemove={onRemove}
            onToggle={onToggle}
          />
        ))}
      </ul>
    </div>
  );
}

function TodoItem({ todo, onRemove, onToggle }) {
  return (
    <li>
      <span
        style={{ textDecoration: todo.done && "line-through" }}
        onClick={() => onToggle(todo.id)}
      >
        {todo.text}
      </span>
      <button onClick={() => onRemove(todo.id)}>삭제</button>
    </li>
  );
}

// React.memo 컴포넌트가 받는 props가 변경되었을 때만 렌더링이 다시 일어난다.
export default React.memo(TodoList);
