import "./App.css";
//import Inputs from "./component/Inputs";
//import Counter from "./component/Counter";
//import InputText from "./component/InputText";
//import TodoList from "./component/TodoList";
//import Effect from "./component/todos/Effect";
//import Hello from "./component/Hello"; //확장자 jsx 를 붙여도 되고, 안붙여도 된다.
//import { useState } from "react";
import Todos from "./component/todos/Todos";
import { TodoProvider, useTodoState } from "./context/todos";

function App() {
  const todos = useTodoState();
  console.log(todos);
  return (
    <TodoProvider>
      <Todos />
    </TodoProvider>
  );
}

// const App = () => {
//   return <EventPractice />;
// };

export default App;
