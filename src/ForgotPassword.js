// import { useState, useEffect } from "react";
import Logo from "./css/logo.png";
// import SignUpCustomer from "./SignUpCustomer";
// import SignupSuccess from "./SignupSuccessCustomer";
import { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

import { Link } from "react-router-dom";

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
  const [show, setShow] = useState(false);

  const [show2, setShow2] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const submitForm = () => {
    // setIsSubmitted(true);
    // localStorage.setItem(1, values.answer1);
    // localStorage.setItem(2, values.answer2);
    // window.location.href = "/ResetPassword";
  };
  const SecurityQuestions = [
    localStorage.getItem("Question1"),
    localStorage.getItem("Question2")
  ];

  // const { changeHandler, submitHandler, values, errors } = UseForm(
  //   submitForm,
  //   validate
  // );
  const validate = () => {
    let errors = {};

    if (!values.answer1) {
      errors.answer1 = "answer required";
    }
    if (!values.answer2) {
      errors.answer2 = "answer required";
    }
    return errors;
  };
  const submitHandler = async (e) => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);

    const answer1 = localStorage.getItem("answer1");
    const serverCheck = await getData(1, answer1);

    if (serverCheck.verfied === true) {
      console.log(`Im hereee`);

      const answer2 = localStorage.getItem("answer1");
      serverCheck = await getData(2, answer2);

      if (serverCheck.verified === true) {
        window.location.href = "/ResetPassword";
      } else {
        handleShow2();
      }
    } else {
      console.log(`got here :()`);
    }
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

    if (e.target.name === "answer1") {
      localStorage.setItem("answer1", e.target.value);
    } else if (e.target.name === "answer2") {
      localStorage.setItem("answer2", e.target.value);
    }
  };

  const handleClick = () => {
    if (Object.keys(errors).length === 0 && isSubmitted) {
      submitForm();
    }
  };

  async function getData(questionNum, answer) {
    const userEmail = localStorage.getItem("Email");
    console.log(`printing email`, userEmail);
    const temp = {
      email: userEmail,
      question_no: questionNum,
      answer: answer
    };
    console.log(temp);
    const response = await fetch(
      "https://apnay-rung-api.herokuapp.com/securityquestions/verify",
      {
        method: "POST",
        withCredentials: false,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(temp)
      }
    );
    // console.log(response.json());
    return response.json();
  }

  const displayPage = () => {
    return (
      <div>
        <div>
          <form onSubmit={submitHandler}>
            <img src={Logo} className="forgot-pass-logo" alt="our logo" />
            <div className="forgot-pass-heading">Forgot Password</div>
            <div>
              <span>
                <label className="label-forgot-password1">
                  {SecurityQuestions[0]}
                </label>
                <input
                  type="text"
                  name="answer1"
                  className="forgot-pass-form"
                  placeholder="your answer here"
                  value={values.answer1}
                  onChange={changeHandler}
                />
                {errors.answer1 && <p>{errors.answer1} </p>}
              </span>
            </div>
            <Link className="forgot-answer-link" onClick={handleShow}>
              {" "}
              Forgot answer?
            </Link>
            <div className="form-inputs">
              <label className="label-forgot-password2">
                {SecurityQuestions[1]}
              </label>
              <input
                type="text"
                name="answer2"
                className="forgot-pass-form"
                placeholder="your answer here"
                value={values.answer2}
                onChange={changeHandler}
              />
              {errors.answer2 && <p>{errors.answer2} </p>}
            </div>

            <Link className="forgot-answer-link" onClick={handleShow}>
              {" "}
              Forgot answer?
            </Link>

            <button className="next-step-btn" type="submit">
              Reset Password
            </button>
            <br />
            <span className="orlogin-option-signup">
              Or
              <Link to="/SignupCustomer"> Sign up</Link>
            </span>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div className="image">
      <div className="forgot-content">
        {/* {!isSubmitted ? <LoginForm submitForm={submitForm} /> : <LoginForm />} */}
        {!isSubmitted ? displayPage() : ""}
      </div>
      <Modal show={show} onHide={handleClose} className="delete-modal">
        <Modal.Header closeButton>
          <Modal.Title>Password Reset</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          A new password has been sent to your email account
        </Modal.Body>
        <Modal.Footer>
          <Link to="/Login">
            <input
              variant="primary"
              type="submit"
              className="delete-primary"
              value="Okay"
            />
          </Link>
        </Modal.Footer>
      </Modal>
      <Modal show={show2} onHide={handleClose2} className="delete-modal">
        <Modal.Header closeButton>
          <Modal.Title>Password Reset</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your answers are incorrect</Modal.Body>
        <Modal.Footer>
          <Link to="/ForgotPassword">
            <input
              variant="primary"
              type="submit"
              className="delete-primary"
              value="Okay"
            />
          </Link>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ForgotPassword;
