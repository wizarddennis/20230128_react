import "./App.css";
//import Inputs from "./component/Inputs";
//import Counter from "./component/Counter";
//import InputText from "./component/InputText";
//import TodoList from "./component/TodoList";
import Effect from "./component/todos/Effect";
//import Hello from "./component/Hello"; //확장자 jsx 를 붙여도 되고, 안붙여도 된다.
import { useState } from "react";

function App() {
  const [show, setShow] = useState(true);
  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? "언마운트" : "마운트"}
      </button>

      {/* 조건부 렌더링 */}
      {show && <Effect />}
    </>
  );
}

export default App;
