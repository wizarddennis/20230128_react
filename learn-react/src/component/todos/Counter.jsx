import { useReducer } from "react";

function reducer(state, action) {
  // 노란색 줄이 뜨는 이유 ???  default 문을 쓰면 해결됨.
  switch (action.type) {
    case "increase":
      return state + 1;
    case "decrease":
      return state - 1;
    default:
      return state;
  }
}

function Counter() {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: "increase" })}>+1</button>
      <button onClick={() => dispatch({ type: "decrease" })}>-1</button>
    </div>
  );
}

export default Counter;
