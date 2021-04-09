import { useState, useEffect } from "react";

const UseFormCNIC = (callback, validate) => {
  const [values, setValues] = useState({
    fileName: "Click here to choose file",
    file: "",
    question1: "",
    answer1: "",
    question2: "",
    answer2: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const changeHandler = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
    console.log(values);
  };

  const fileHandler = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.files[0],
      fileName: e.target.files[0].name
    });
    values.fileName = values.file.name;
    console.log(values);
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

  return { changeHandler, submitHandler, values, errors, fileHandler };
};

export default UseFormCNIC;
