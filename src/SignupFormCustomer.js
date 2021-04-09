// import { useState, useEffect } from "react";
import UseForm from "./UseFormCustomer";
import validate from "./validateInfoCustomer";
import Logo from "./css/logo.png";

import "./styles.css";

const SignUpFormCustomer = ({ submitForm }) => {
  const { changeHandler, submitHandler, values, errors } = UseForm(
    submitForm,
    validate
  );
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

  return (
    <div>
      <form onSubmit={submitHandler}>
        <img src={Logo} className="signup-img" alt="our logo" />
        <div className="signup-heading">
          <p>Sign up</p>
        </div>
        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-secondary">
            Customer
          </button>
          <button type="button" class="btn btn-secondary">
            Seller
          </button>
        </div>
        <br />
        <span className="form-inputs">
          {/* <label htmlFor="name" className="form-label">
          </label> */}
          <input
            type="text"
            name="userName"
            className="signup-label-form-left"
            placeholder="full name"
            value={values.userName}
            onChange={changeHandler}
          />
          {errors.userName && <p>{errors.userName} </p>}
          <input
            type="email"
            name="email"
            className="signup-label-form-right"
            placeholder="email"
            value={values.email}
            onChange={changeHandler}
          />
          {errors.email && <p>{errors.email} </p>}
        </span>
        <span className="form-inputs">
          <input
            type="password"
            name="password"
            className="signup-label-form-left"
            placeholder="password"
            value={values.password1}
            onChange={changeHandler}
          />
          {errors.password && <p>{errors.password} </p>}
          <input
            type="password"
            name="password2"
            className="signup-label-form-right"
            placeholder="re-type password"
            value={values.password2}
            onChange={changeHandler}
          />
          {errors.password2 && <p>{errors.password2} </p>}
        </span>
        <span className="form-inputs">
          <input
            type="text"
            name="address"
            className="signup-label-form-left"
            placeholder="Address"
            value={values.address}
            onChange={changeHandler}
          />
          {errors.address && <p>{errors.address} </p>}
          <input
            type="number"
            name="phonenumber"
            className="signup-label-form-right"
            placeholder="Phone Number"
            value={values.phonenumber}
            onChange={changeHandler}
          />
          {errors.phonenumber && <p>{errors.phonenumber} </p>}
        </span>
        <button className="next-step-btn" type="submit">
          Next Step
        </button>
        <br />
        <span className="orlogin-option-signup">
          Or
          <a href="#"> Log in </a>
        </span>
      </form>
    </div>
  );
};

export default SignUpFormCustomer;
