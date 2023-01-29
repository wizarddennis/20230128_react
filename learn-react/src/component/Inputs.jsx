import { useInputs } from "../hook/useInputs";

// React의 훅을 합쳐서 커스텀 훅 작성..
function Inputs() {
  const [inputs, handleInputs, reset] = useInputs({
    name: "",
    email: "",
  });

  return (
    <div>
      <p>
        {inputs.name} ({inputs.email})
      </p>
      <input type="text" onChange={handleInputs} name="name" />
      <input type="text" onChange={handleInputs} name="email" />
      <button onClick={reset}>초기화</button>
    </div>
  );
}

export default Inputs;
