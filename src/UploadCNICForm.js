// import { useState, useEffect } from "react";
import UseForm from "./UseFormCNIC";
import validate from "./validateCNIC";
import Logo from "./css/logo.png";
import { DropdownButton, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useState } from "react";

import "./styles.css";
import "./vafa.css";

const UploadCNICForm = ({ submitForm }) => {
  const { changeHandler, submitHandler, values, errors, fileHandler } = UseForm(
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

  //sends the image file to backend
  const handleUpload = () => {
    const fileObj = new FormData();
    fileObj.append("cnic-image", values.file, values.fileName);
    // console.log(picture);
  };
  const handleClick = () => {
    if (Object.keys(errors).length === 0) {
      window.location.href = "/Login";
    }
  };

  return (
    <form onSubmit={submitHandler} enctype="multipart/form-data">
      <img src={Logo} className="cnic-logo" alt="our logo" />
      <div className="signup-heading">Sign up</div>
      <div class="btn-group" role="group" aria-label="Basic example">
        <Link to="/CustomerPanel">
          <input type="submit" value="Customer" className="btnfalse" />
        </Link>
        <Link to="/Checkout">
          <input type="submit" value="Seller" className="btntrue" />
        </Link>
      </div>

      <span>
        <label for="upload-photo" className="upload-file-label">
          {values.fileName}
        </label>
        <input
          type="file"
          name="file"
          accept="image/*, application/pdf"
          onChange={fileHandler}
          id="upload-photo"
        />
        {errors.file && <p>{errors.file} </p>}
        <button className="upload-btn">Upload</button>
      </span>

      <span className="form-inputs">
        <select
          className="cnic-label-form-left"
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
          className="cnic-label-form-right"
          placeholder="answer"
          value={values.answer1}
          onChange={changeHandler}
        />
        {errors.answer1 && <p>{errors.answer1} </p>}
      </span>
      <span className="form-inputs">
        <select
          className="cnic-label-form-left"
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
          className="cnic-label-form-right"
          placeholder="answer"
          value={values.answer2}
          onChange={changeHandler}
        />
        {errors.answer2 && <p>{errors.answer2} </p>}
      </span>
      <input
        type="submit"
        className="next-step-btn"
        value="Sign Up"
        onClick={handleClick}
      />
      <br />
      <span className="orlogin-option-signup">
        Or
        <Link to="/Login"> Log in</Link>
      </span>
    </form>
  );
};

export default UploadCNICForm;
