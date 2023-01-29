import { useState, useRef } from "react";

const todoList = [
  { id: 1, text: "컴포넌트 만들기", done: false },
  { id: 2, text: "상태 관리하기", done: false },
  { id: 3, text: "배열 렌더링하기", done: false },
];

// let result = [
//   <li>컴포넌트 만들기</li>,
//   <li>상태 관리하기</li>,
//   <li>배열 렌더링하기</li>,
// ];

let result = todoList.map((todo) => <li>{todo.text}</li>);

function TodoList() {
  const [todos, setTodos] = useState(todoList);
  const [input, setInput] = useState("");

  const nextId = useRef(4); // 4는 초기값
  const inputRef = useRef();

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  // input 상태값 + 업데이트 함수 만들기
  const handleSubmit = (e) => {
    e.preventDefault(); // 태그의 기본 기능을 막는다...이걸 안넣으면 Enter 쳤을때, 문제가 발생됨.

    if (input === "") return; // input이 빈 문자일 때 함수 종료..
    // 기존의 todos 배열을 새로운 배열에 복사하고, 마지막에 새로운 요소 추가.
    //  => 기존과 다른 새루운 배열을 만들어서 불변성 유지
    //setTodos([...todos, { id: 4, text: input, done: false }]); // 아래 코드와 동일하게 동작함.
    setTodos(todos.concat({ id: nextId.current++, text: input, done: false }));
    setInput("");
    inputRef.current.focus();
  };

  const handleRemove = (id) => {
    if (window.confirm("삭제하시겠습니까?"))
      // 선택한 id가 아닌 요소들만 모으기
      console.log(id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleInput}
          value={input}
          ref={inputRef}
        />
        <button> 등록 </button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}{" "}
            <button onClick={() => handleRemove(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
