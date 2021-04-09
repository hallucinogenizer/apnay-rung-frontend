// import { useState, useEffect } from "react";
import UseForm from "./UseLoginForm";
import validate from "./validateLogin";
import Logo from "./css/logo.png";
import SignUpCustomer from "./SignUpCustomer";
import SignupSuccess from "./SignupSuccessCustomer";
import { useState, useEffect } from "react";

import "./styles.css";

const ForgotPassword = () => {
  const [values, setValues] = useState({
    question1: "",
    answer1: "",
    question2: "",
    answer2: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitForm = () => {
    setIsSubmitted(true);
  };
  const SecurityQuestions = [
    {
      question: "What is the name of your cat?",
      answer: "chloe"
    },
    {
      question: "What is your birth city?",
      answer: "lahore"
    }
  ];

  // const { changeHandler, submitHandler, values, errors } = UseForm(
  //   submitForm,
  //   validate
  // );
  const validate = () => {
    let errors = {};

    if (!values.answer1) {
      errors.answer1 = "answer required";
    } else if (values.answer1 !== SecurityQuestions[0].answer) {
      errors.answer1 = "your answer is not correct ";
    }
    if (!values.answer2) {
      errors.answer2 = "answer required";
    } else if (values.answer2 !== SecurityQuestions[1].answer) {
      errors.answer2 = "your answer is not correct ";
    }
    return errors;
  };
  const submitHandler = (e) => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      submitForm();
    }
  }, [errors]);

  const changeHandler = (e) => {
    console.log(`hello im here`);
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
    console.log(values);
  };

  const displayPage = () => {
    return (
      <div>
        <div>
          <form onSubmit={submitHandler}>
            <img src={Logo} className="signup-img" alt="our logo" />
            <h3>Forgot Password</h3>

            <div className="form-inputs">
              <span>
                <label className="label-forgot-password">
                  {SecurityQuestions[0].question}
                </label>
                <input
                  type="text"
                  name="answer1"
                  className="input-form-signup"
                  placeholder="your answer here"
                  value={values.answer1}
                  onChange={changeHandler}
                />
                {errors.answer1 && <p>{errors.answer1} </p>}
              </span>
            </div>
            <div className="form-inputs">
              <label>{SecurityQuestions[1].question}</label>
              <input
                type="text"
                name="answer2"
                className="input-form-signup"
                placeholder="your answer here"
                value={values.answer2}
                onChange={changeHandler}
              />
              {errors.answer2 && <p>{errors.answer2} </p>}
            </div>
            <span>
              <a href="#"> Forgot answers? </a>
            </span>
            <button className="next-step-btn" type="submit">
              Reset Password
            </button>
            <br />
            <span>
              Or
              <a href={<SignUpCustomer />}> Sign up </a>
            </span>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div className="background-image">
      <div className="form-container">
        {/* {!isSubmitted ? <LoginForm submitForm={submitForm} /> : <LoginForm />} */}
        {!isSubmitted ? displayPage() : <SignupSuccess />}
      </div>
    </div>
  );
};

export default ForgotPassword;
