import { createContext, useReducer, useContext } from "react";

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

const TodoStateContext = createContext(null);
const TodoDispatchContext = createContext(null);

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export function useTodoState() {
  const context = useContext(TodoStateContext);

  // App.js return문 외부에서 사용했을 때, 오류를 사용하기 위해서..
  if (!context) {
    throw new Error("Provider를 찾을 수 없습니다.");
  }

  return context;
}

export function useTodoDispatch() {
  const context = useContext(TodoDispatchContext);

  // App.js return문 외부에서 사용했을 때, 오류를 사용하기 위해서..
  if (!context) {
    throw new Error("Provider를 찾을 수 없습니다.");
  }

  return context;
}
