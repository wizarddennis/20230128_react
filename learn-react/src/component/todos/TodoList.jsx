// 할일들을 나열해주는 역할

function TodoList() {
  return (
    <div>
      <ul>
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </ul>
    </div>
  );
}

function TodoItem() {
  return (
    <li>
      <span>해야할 일</span>
      <button>삭제</button>
    </li>
  );
}

export default TodoList;
