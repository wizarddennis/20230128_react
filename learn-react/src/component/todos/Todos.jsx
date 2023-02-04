import { useReducer, useEffect, useState, useRef, useCallback } from "react";
//import Counter from "./Counter";
import TodoCreate from "./TodoCreate";
import TodoList from "./TodoList";

// reducer 함수의 return 값이 상태로 업데이트 된다.
function reducer(state, action) {
  //   console.log(state, action);
  //return [...state, { id: 4, text: "테스트", done: false }];
  switch (action.type) {
    case "create":
      return [...state, { id: action.id, text: action.text, done: false }];
    case "remove":
      return state.filter((todo) => todo.id !== action.id);
    case "toggle":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );

    default:
      return state;
  }
}

const initialState = [
  { id: 1, text: "useEffect 배우기", done: true },
  { id: 2, text: "useReducer 배우기", done: false },
  { id: 3, text: "useCallback, useMemo 배우기", done: false },
];

function Todos() {
  // 아래 컴포넌트 2에게 상태를 보내주려면...요 위치에서 선언해야 함.
  //useReducer(리듀서함수, 초기값) => 상태값, 디스패치 함수를 반환함.
  const [todos, dispatch] = useReducer(reducer, initialState);
  const [text, setText] = useState("");
  const handleText = (e) => setText(e.target.value);

  const nextId = useRef(4);

  console.log(todos);

  useEffect(() => {
    // dispatch({ test: "test" });
  }, []);

  //const handleCreate = () => {};
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch({ type: "create", id: nextId.current++, text });
      setText("");
    },
    [text]
  );

  const handleRemove = useCallback((id) => {
    if (window.confirm("삭제하시겠습니까?")) dispatch({ type: "remove", id });
  }, []);

  const handleToggle = useCallback(
    (id) => dispatch({ type: "toggle", id }),
    []
  );

  return (
    <div>
      <TodoCreate onChange={handleText} onSubmit={handleSubmit} text={text} />
      <TodoList todos={todos} onRemove={handleRemove} onToggle={handleToggle} />
      {/* <Counter /> */}
    </div>
  );
}

export default Todos;
