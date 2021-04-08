import { useState, useEffect } from "react";

const UseFormSeller = (callback, validate) => {
  const [values, setValues] = useState({
    userName: "",
    email: "",
    password: "",
    password2: "",
    address: "",
    phonenumber: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const changeHandler = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return { changeHandler, submitHandler, values, errors };
};

export default UseFormSeller;
