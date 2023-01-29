import { useState } from "react";

// Custom Hook 만들기
export function useInputs(initialForm) {
  const [form, setForm] = useState(initialForm);

  const handleForm = (e) => {
    const { value, name } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleReset = () => {
    setForm(initialForm);
  };

  return [form, handleForm, handleReset];
}
