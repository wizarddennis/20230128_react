import { useState, useRef } from "react";

//  입력창...
function TodoCreate({ onChange, onSubmit, text }) {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} value={text} />
        <button>등록</button>
      </form>
    </div>
  );
}

export default TodoCreate;
