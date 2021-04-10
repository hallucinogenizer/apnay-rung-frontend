// import { useState, useEffect } from "react";
import UseForm from "./UseLoginForm";
import validate from "./validateLogin";
import Logo from "./css/logo.png";
// import SignUpCustomer from "./SignUpCustomer";
import { Link } from "react-router-dom";

import "./styles.css";

const LoginForm = ({ submitForm }) => {
  const { changeHandler, submitHandler, values, errors } = UseForm(
    submitForm,
    validate
  );

  //this will land the user to customer or seller panel
  const handleClick = () => {
    if (Object.keys(errors).length === 0) {
      window.location.href = "/CustomerPanel";
    }
  };

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <img src={Logo} className="login-img" alt="our logo" />
        <div className="signup-heading">Log in</div>
        <div className="form-inputs">
          {errors.email && <p>{errors.email} </p>}
          <input
            type="email"
            name="email"
            className="login-label-form"
            placeholder="email"
            value={values.email}
            onChange={changeHandler}
          />
        </div>
        <div className="form-inputs">
          <input
            type="password"
            name="password"
            className="login-label-form"
            placeholder="password"
            value={values.password1}
            onChange={changeHandler}
          />
        </div>
        <span>
          <Link to="/ForgotPassword" className="forgot-password-link">
            Forgot password?
          </Link>
        </span>
        <button className="next-step-btn" type="submit" onClick={handleClick}>
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

export default LoginForm;
