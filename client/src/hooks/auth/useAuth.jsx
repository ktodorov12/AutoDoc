import { useState } from "react";

import { post } from "../../api/requester";

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

  async function handleSubmit(e, endpoint) {
    e.preventDefault();

    try {
      // TODO: fix logic
      const response = await post(endpoint, inputs);
    } catch (error) {
      // TODO: add error handling
      console.log(error);
    } finally {
      setInputs(initialValues);
    }
  }

  return { inputs, handleChange, handleSubmit };
}
