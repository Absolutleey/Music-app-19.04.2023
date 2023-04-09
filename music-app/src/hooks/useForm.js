import { useState } from "react";

export const useForm = (initValues, submitHandler) => {
  const [values, setValues] = useState(initValues);

  const changeHandler = (e) => {
    setValues(state => ({ ...state, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    submitHandler(values);
  };

  const changeValues = (newValues) => {
    
    
    setValues(newValues);
};

  return {
    values,
    changeHandler,
    onSubmit,
    changeValues
  };
};
