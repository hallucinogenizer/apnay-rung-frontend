import { useState, useEffect } from "react";
import UseForm from "./UseFormSeller";
import validate from "./validateInfoSeller";
import Logo from "./css/logo.png";
// import Background from "./css/background.png";
import Homepage from "./Homepage";
import { Link } from "react-router-dom";

import "./styles.css";
import "./taimoor.css";

const SignUpFormCustomer = ({ submitForm }) => {
  const [button, setButton] = useState(`true`);
  const { changeHandler, submitHandler, values, errors } = UseForm(
    submitForm,
    validate
  );

  const switchButton = () => {
    setButton(!button);
  };
  const handleClick = () => {
    if (Object.keys(errors).length === 0) {
      window.location.href = "/UploadCNIC";
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <img src={Logo} className="signup-img" alt="our logo" />
        <div className="signup-heading">
          <p>Sign up</p>
        </div>
        <div class="btn-group" role="group" aria-label="Basic example">
          <Link to="/SignupCustomer">
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
            placeholder="province"
            value={values.address}
            onChange={changeHandler}
          />
          {errors.address && <p>{errors.address} </p>}
          <input
            type="tel"
            name="phonenumber"
            className="signup-label-form-right"
            placeholder="phone number"
            value={values.phonenumber}
            onChange={changeHandler}
          />
          {errors.phonenumber && <p>{errors.phonenumber} </p>}
        </span>
        <button className="next-step-btn" type="submit" onClick={handleClick}>
          Next Step
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

export default SignUpFormCustomer;
