// import { useState, useEffect } from "react";
import UseForm from "./UseFormSecurity";
import validate from "./validateSecurity";
import Logo from "./css/logo.png";
import { DropdownButton, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

import "./styles.css";

const SecurityForm = ({ submitForm }) => {
  const { changeHandler, submitHandler, values, errors } = UseForm(
    submitForm,
    validate
  );

  const questions = {
    questionsArray: [
      "Choose a security question",
      "What is the name of your cat?",
      "What is your birth city?",
      "What is the color of your car?"
    ]
  };
  // const [values, setValues] = useState({
  //   userName: "",
  //   email: "",
  //   password: "",
  //   password2: ""
  // });
  // const [errors, setErrors] = useState({});
  // const [isSubmitting, setIsSubmitting] = useState(false);

  // const changeHandler = (e) => {
  //   setValues({
  //     ...values,
  //     [e.target.name]: e.target.value
  //   });
  // };

  // const validateInfo = (values) => {
  //   let errors = {};

  //   if (!values.userName.trim()) {
  //     errors.userName = "Your name is required";
  //   }

  //   if (!values.email) {
  //     errors.email = "Email required";
  //     //shows errors if .com or incorrect email not added
  //   } else if (!/\S+@\S+\.\S+/.test(values.email)) {
  //     errors.email = "Invalid email address";
  //   }

  //   if (!values.password) {
  //     errors.password = "Password is required";
  //   } else if (values.password.length < 6) {
  //     errors.password = "Password needs to be 6 characters or more";
  //   }
  //   if (!values.password2) {
  //     errors.password2 = "Password is required";
  //   } else if (values.password2 !== values.password) {
  //     errors.password2 = "Passwords do not match";
  //   }

  //   return errors;
  // };
  // const submitHandler = (e) => {
  //   e.preventDefault();

  //   setErrors(validateInfo(values));
  //   setIsSubmitting(true);
  // };
  const [question1, setQuestion1] = useState("");
  const [question2, setQuestion2] = useState("");
  const handleQuestion1 = (e) => {
    setQuestion1(e);
  };
  const handleQuestion2 = (e) => {
    setQuestion2(e);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <img src={Logo} className="signup-img" alt="our logo" />
        <div className="signup-heading">Sign up</div>
        <div className="signup-btn-group">
          <button type="button" className="btn btn-default">
            Customer
          </button>
          <button type="button" className="btn btn-default">
            Seller
          </button>
        </div>
        <div className="form-inputs">
          {/* <label htmlFor="name" className="form-label">
          </label> */}
          {/* <input
            type="text"
            name="securityquestion1"
            className="input-form-signup"
            placeholder="security question"
            value={values.question1}
            onChange={changeHandler}
          /> */}
          <select className="form-inputs">
            {questions.questionsArray.map((question) => (
              <option
                title={question}
                onChange={handleQuestion1}
                value={values.question1}
              >
                {question}
              </option>
            ))}
          </select>
          {/* <DropdownButton
            variant="light"
            id="dropdown-basic-button"
            title="Choose a security question"
          >
            {questions.questionsArray.map((question) => (
              <Dropdown.Item
                title={question}
                value={values.question1}
                onChange={changeHandler}
              >
                {question}
              </Dropdown.Item>
            ))}
            ;
          </DropdownButton> */}
          {errors.question1 && <p>{errors.question1} </p>}
        </div>
        <div className="form-inputs">
          <input
            type="text"
            name="answer1"
            className="input-form-signup"
            placeholder="answer"
            value={values.answer1}
            onChange={changeHandler}
          />
          {errors.answer1 && <p>{errors.answer1} </p>}
        </div>
        <div className="form-inputs">
          {/* <label htmlFor="name" className="form-label">
          </label> */}
          {/* <input
            type="text"
            name="question2"
            className="input-form-signup"
            placeholder="security question"
            value={values.question2}
            onChange={changeHandler}
          /> */}
          <select className="form-inputs">
            {questions.questionsArray.map((question) => (
              <option
                title={question}
                onChange={handleQuestion2}
                value={values.question2}
              >
                {question}
              </option>
            ))}
          </select>
          {/* <DropdownButton
            variant="light"
            id="dropdown-basic-button"
            title="Choose a security question"
          >
            {questions.questionsArray.map((question) => (
              <Dropdown.Item
                title={question}
                value={values.question1}
                onChange={changeHandler}
              >
                {question}
              </Dropdown.Item>
            ))}
            ;
          </DropdownButton> */}
          {errors.question2 && <p>{errors.question2} </p>}
        </div>
        <div className="form-inputs">
          {/* <label htmlFor="name" className="form-label">
          </label> */}
          <input
            type="text"
            name="answer2"
            className="input-form-signup"
            placeholder="answer"
            value={values.answer2}
            onChange={changeHandler}
          />
          {errors.answer2 && <p>{errors.answer2} </p>}
        </div>
        <button className="next-step-btn" type="submit">
          Next Step
        </button>
        <br />
        <span>
          Or
          <a href="#"> Log in </a>
        </span>
      </form>
    </div>
  );
};

export default SecurityForm;
