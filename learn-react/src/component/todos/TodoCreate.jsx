import { useState, useRef } from "react";

//  입력창...
function TodoCreate({ dispatch }) {
  const [text, setText] = useState();
  const nextId = useRef(4);

  const handleText = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "create", id: nextId.current++, text });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleText} />
        <button>등록</button>
      </form>
    </div>
  );
}

export default TodoCreate;
