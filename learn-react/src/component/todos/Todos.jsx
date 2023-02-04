import { useReducer, useEffect } from "react";
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

  console.log(todos);

  useEffect(() => {
    // dispatch({ test: "test" });
  }, []);

  //const handleCreate = () => {};

  return (
    <div>
      <TodoCreate dispatch={dispatch} />
      <TodoList todos={todos} />
      {/* <Counter /> */}
    </div>
  );
}

export default Todos;
