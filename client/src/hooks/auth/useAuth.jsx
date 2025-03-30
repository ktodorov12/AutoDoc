import { useState } from "react";

const whitespaceRemover = (val) => val.replace(/\s/g, "");

export default function useAuth(initialValues) {
  const [inputs, setInputs] = useState(initialValues);

  function handleChange(e) {
    const inputName = e.target.name;
    let newVal = whitespaceRemover(e.target.value);

    // TODO: add logic for hiding password
    // ...
    //

    setInputs({ ...inputs, [inputName]: newVal });
  }

  function handleSubmit(e) {
    e.preventDefault();

    // TODO: add logic
    console.log("Sent------");
    console.log(inputs);
    //

    setInputs(initialValues);
  }

  return { inputs, handleChange, handleSubmit };
}
