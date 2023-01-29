import { useState } from "react";

function InputText() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    console.log(e.target.name);
    // 상태 업데이트를 할 때는 기존 객체를 변경하면 안된다.  => 불변성 지켜야 한다.
    setInputs({
      // 기존의 inputs 값을 펼치고, 일부분만 수정
      ...inputs,
      [name]: value,
    });
  };

  return (
    <div>
      <p>{inputs.name} Pinputs</p>
      <input type="text" onChange={handleInputs} name="name" />
      <input type="text" onChange={handleInputs} name="email" />
    </div>
  );
}

export default InputText;
