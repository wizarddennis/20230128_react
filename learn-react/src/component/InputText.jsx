import { useState } from "react";

function InputText() {
  const [text, setText] = useState("작성해 주세요");

  const handleText = (e) => {
    if (e.target.value === "") setText("작성해주세요");
    else setText(e.target.value);
  };

  return (
    <div>
      <p>{text}</p>
      <input type="text" onChange={handleText} />
    </div>
  );
}

export default InputText;
