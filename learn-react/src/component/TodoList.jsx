import { useState, useRef } from "react";

const todoList = [
  { id: 1, text: "컴포넌트 만들기", done: true },
  { id: 2, text: "상태 관리하기", done: false },
  { id: 3, text: "배열 렌더링하기", done: false },
];

// let result = [
//   <li>컴포넌트 만들기</li>,
//   <li>상태 관리하기</li>,
//   <li>배열 렌더링하기</li>,
// ];

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
    e.preventDefault(); // 태그의 기본 기능을 막는다...이걸 안넣으면 Enter 쳤을때, 초기화 되는 현상이 있음

    if (input === "") return; // input이 빈 문자일 때 함수 종료..
    // 기존의 todos 배열을 새로운 배열에 복사하고, 마지막에 새로운 요소 추가.
    //  => 기존과 다른 새루운 배열을 만들어서 불변성 유지
    //setTodos([...todos, { id: 4, text: input, done: false }]); // 아래 코드와 동일하게 동작함.
    setTodos(todos.concat({ id: nextId.current++, text: input, done: false }));
    setInput("");
    inputRef.current.focus();
  };

  //클릭한 요소 삭제 기능 추가
  const handleRemove = (id) => {
    if (window.confirm("삭제하시겠습니까?"))
      // 선택한 id가 아닌 요소들만 모으기
      console.log(id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // todo.done 클릭시 반전 기능 추가
  const handleToggle = (id) => {
    setTodos(
      todos.map((todo) => {
        /*
          아래 2줄을 한줄로 줄이면...
        if (todo.id === id) return { ...todo, done: !todo.done };
        else return todo; */
        return todo.id === id ? { ...todo, done: !todo.done } : todo;
      })
    );
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
          <li
            key={todo.id}
            style={{
              textDecoration: todo.done && "line-through",
              userSelect: "none",
            }}
            onClick={() => handleToggle(todo.id)}
          >
            {todo.text}{" "}
            <button
              onClick={(e) => {
                e.stopPropagation(); //이벤트 전파를 더 이상하지 않는다.
                handleRemove(todo.id);
              }}
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
