import axios from "axios";
import { useEffect, useState } from "react";

function Todos() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const fetchData = async () => {
    // 이것의 return 값은 promise인데, 앞에 await 을 붙이면 Promise가 resolve 되기 전까지 다음 코드가 실행되지 않는다.
    const res = await fetch("http://localhost:5000/todos");
    console.log(res);
    const data = await res.json();

    setTodos(data);
  };

  const handleSubmit = async () => {
    try {
      /* ------AXIOS 로 바꾸기 위해서 주석처리 ---BEGIN
      const res = await fetch("http://localhost:5000/todo", {
        method: "POST",
        body: JSON.stringify({
          text,
          done: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      console.log(data);
      ------AXIOS 로 바꾸기 위해서 주석처리 ---END
*/

      // 위에 여러줄은 아래처럼 짧게 할 수 있다.
      const res = await axios.post("http://localhost:5000/todos", {
        text,
        done: false,
      });

      console.log(res.data);

      //setTodos([...todos, data]); // 이건 응답

      await fetchData();
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    // fetch("http://localhost:5000/todos")
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));

    fetchData();
  }, []);

  return (
    <div>
      <div>
        <input type="text" onChange={(e) => setText(e.target.value)} />
        <button onClick={handleSubmit}>등록</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
