// import { useState, useEffect } from "react";
import UseForm from "./UseFormSecurity";
import validate from "./validateSecurity";
import Logo from "./css/logo.png";
import { DropdownButton, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Link } from "react-router-dom";

import "./styles.css";

const SecurityForm = ({ submitForm }) => {
  const { changeHandler, submitHandler, values, errors } = UseForm(
    submitForm,
    validate
  );
  const [button, setButton] = useState(`true`);

  const questions = {
    questionsArray: [
      "Choose a security question",
      "What is the name of your cat?",
      "What is your birth city?",
      "What is the color of your car?"
    ]
  };
  const switchButton = () => {
    setButton(!button);
  };
  const handleClick = () => {
    if (Object.keys(errors).length === 0) {
      window.location.href = "/Login";
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <img src={Logo} className="cnic-logo" alt="our logo" />
        <div className="signup-heading">Sign up</div>
        <div class="btn-group" role="group" aria-label="Basic example">
          <Link to="/SecurityPage">
            <input
              type="submit"
              value="Customer"
              className={`btn${button}`}
              onClick={switchButton}
              style={{ borderRadius: "5px 0px 0px 5px" }}
            />
          </Link>
          <Link to="/SignupSeller">
            <input
              type="submit"
              value="Seller"
              className={`btn${!button}`}
              onClick={switchButton}
              style={{ borderRadius: "0px 5px 5px 0px" }}
            />
          </Link>
        </div>
        <span className="form-inputs">
          <select
            className="security-form-left"
            name="question1"
            onChange={changeHandler}
          >
            {questions.questionsArray.map((question) => (
              <option
                title={question}
                // name="question1"
                // onChange={changeHandler}
                value={question}
              >
                {question}
              </option>
            ))}
          </select>
          {errors.question1 && <p>{errors.question1} </p>}

          <input
            type="text"
            name="answer1"
            className="security-form-right"
            placeholder="answer"
            value={values.answer1}
            onChange={changeHandler}
          />
          {errors.answer1 && <p>{errors.answer1} </p>}
        </span>
        <span className="form-inputs">
          <select
            className="security-form-left"
            name="question2"
            onChange={changeHandler}
          >
            {questions.questionsArray.map((question) => (
              <option title={question} value={question}>
                {question}
              </option>
            ))}
          </select>

          {errors.question2 && <p>{errors.question2} </p>}

          <input
            type="text"
            name="answer2"
            className="security-form-right"
            placeholder="answer"
            value={values.answer2}
            onChange={changeHandler}
          />
          {errors.answer2 && <p>{errors.answer2} </p>}
        </span>
        <button className="next-step-btn" type="submit" onClick={handleClick}>
          Sign Up
        </button>
        <br />
        <span className="orlogin-option-signup">
          Or
          <Link to="/Login"> Log in</Link>
        </span>
      </form>
    </div>
  );
};

export default SecurityForm;
