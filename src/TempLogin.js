import Logo from "./css/logo.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

const TempLogin = () => {
  //storing user's entered fields
  const [values, setValues] = useState({
    email: "",
    password: ""
  });
  const [state, setState] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userType, setUserType] = useState(``);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //routes to catalog page if validation clears
  const submitForm = () => {
    // setIsSubmitted(true);
    // localStorage.setItem(values);
  };

  //storing user's state
  const changeHandler = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
    if (e.target.name === "email") {
      localStorage.setItem("Email", e.target.value);
    }
  };

  //checks for errors upon submission
  const submitHandler = async (e) => {
    e.preventDefault();
    setErrors(validate(values));
    const serverResponse = await getData();
    console.log(serverResponse);
    if (serverResponse.verified === true) {
      console.log(`got here`);
      const token = serverResponse.accessToken;
      localStorage.setItem("Token", token);
      localStorage.setItem("Email", values.email);
      if (serverResponse.typeOfUser === "customer") {
        setUserType(serverResponse.typeOfUser);
        window.location.href = "/Catalog";
      } else if (serverResponse.typeOfUser === "seller") {
        setUserType(serverResponse.typeOfUser);
        window.location.href = "/SellerPanel";
      }
    } else {
      console.log(`in incorrect pass branch`);
      errors.password = "password is incorrect";
      handleShow();
    }
  };

  //performs checks for input
  const validate = () => {
    let errors = {};

    if (!values.email) {
      errors.email = "Email required";
      //shows errors if .com or incorrect email not added
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password needs to be 6 characters or more";
    }

    return errors;
  };
  //fetching data from the server
  async function getData() {
    const response = await fetch(
      "https://apnay-rung-api.herokuapp.com/verify",
      {
        method: "POST",
        withCredentials: false,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: values.email,
          password: values.password
        })
      }
    );
    // console.log(response.json());
    return response.json();
  }

  const handleForget = async () => {
    const userQuestions = await postData();
    console.log(userQuestions);
    localStorage.setItem("Question1", userQuestions[0]);
    localStorage.setItem("Question2", userQuestions[1]);
  };
  async function postData() {
    const userEmail = localStorage.getItem("Email");
    const response = await fetch(
      "https://apnay-rung-api.herokuapp.com/securityquestions",
      {
        method: "POST",
        withCredentials: true,
        credentials: "include",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTcsIm5hbWUiOiJUYWltb29yIFRhcmlxIiwidHlwZU9mVXNlciI6ImN1c3RvbWVyIiwiaWF0IjoxNjE2OTYxNzMwfQ.Dn0FATITkhrR7e5tkp_XAmdPfp-FKJGzdskczt9k2fw",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: userEmail
        })
      }
    );
    return response.json();
  }

  const displayPage = () => {
    return (
      <div>
        <form className="form" onSubmit={submitHandler}>
          <img src={Logo} className="login-img" alt="our logo" />
          <div className="signup-heading">Log in</div>
          <br />
          <br />
          <div>
            {errors.email && <div className="err-centre">{errors.email}</div>}
          </div>
          <div className="form-inputs">
            <input
              type="email"
              name="email"
              className="login-label-form"
              placeholder="email"
              value={values.email}
              onChange={changeHandler}
            />
          </div>
          <br />
          <div>
            {errors.password && (
              <div className="err-centre">{errors.password}</div>
            )}
          </div>
          <div className="form-inputs">
            <input
              type="password"
              name="password"
              className="login-label-form"
              placeholder="password"
              value={values.password}
              onChange={changeHandler}
            />
          </div>
          <span>
            <Link
              to="/ForgotPassword"
              className="forgot-password-link"
              onClick={handleForget}
            >
              Forgot password?
            </Link>
          </span>
          <button className="next-step-btn" type="submit">
            Login
          </button>
          <br />
          <span className="orlogin-option-signup">
            Or
            <Link to="/SignupCustomer"> Sign up</Link>
          </span>
        </form>
      </div>
    );
  };

  return (
    <div className="image">
      <div className="content-logout">{!isSubmitted ? displayPage() : ""}</div>
      <Modal show={show} onHide={handleClose} className="delete-modal">
        <Modal.Header closeButton>
          <Modal.Title>Password Reset</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your password is incorrect. Please try again.</Modal.Body>
        <Modal.Footer>
          <Link to="/TempLogin">
            <input
              variant="primary"
              type="submit"
              className="delete-primary"
              value="Okay"
              onClick={handleClose}
            />
          </Link>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default TempLogin;
