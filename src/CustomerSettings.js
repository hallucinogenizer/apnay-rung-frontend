import "./styles.css";
import AdminNavbar from "./AdminNavbar";
import Memory from "./Memory";
import BottomBar from "./BottomBar";
import { useState } from "react";
import back_image from "./css/back.png";

const CustomerSettings = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [currPass, setCurrPass] = useState();
  const [newPass, setNewPass] = useState();
  const [phoneNo, setPhoneNo] = useState();
  const [address, setAddress] = useState();

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleCurrPass = (event) => {
    setCurrPass(event.target.value);
  };

  const handleNewPass = (event) => {
    setNewPass(event.target.value);
  };

  const handlePhoneNo = (event) => {
    setPhoneNo(event.target.value);
  };

  const handleAddress = (event) => {
    setAddress(event.target.value);
  };

  return (
    <div>
      <AdminNavbar />
      <Memory panel="Customer Panel" page="" current="Account Settings" />{" "}
      {/* when three links needed in panel, include a '/' in the middle 'page' argument */}
      <span>
        <a className="back-btn">
          <img src={back_image} width="26" />
          <h1 className="back-btn-page-title">Account Settings</h1>
        </a>
      </span>
      <br />
      <br />
      <form>
        <p className="label-form">Name:</p>
        <input
          className="input-form"
          type="text"
          value={name}
          onChange={handleName}
        />
        <br />
        <p className="label-form">Email:</p>
        <input
          className="input-form"
          type="text"
          value={email}
          onChange={handleEmail}
        ></input>
        <br />
        <br />
        <span>
          <label className="label-form-cp">Current Password:</label>
          <label className="label-form-np">New Password:</label>
        </span>
        <br />
        <span>
          <input
            className="input-form-cp"
            type="text"
            value={currPass}
            onChange={handleCurrPass}
          ></input>
          <input
            className="input-form-np"
            type="text"
            value={newPass}
            onChange={handleNewPass}
          ></input>
        </span>
        <br />
        <p className="label-form">Phone Number:</p>
        <input
          className="input-form"
          type="text"
          value={phoneNo}
          onChange={handlePhoneNo}
        ></input>
        <br />
        <p className="label-form">Address:</p>
        <textarea
          className="input-des"
          type="text"
          value={address}
          onChange={handleAddress}
          rows="4"
          cols="50"
        ></textarea>
      </form>
      <br />
      <input type="button" className="submit-button" value="Submit" />
      <BottomBar />
    </div>
  );
};

export default CustomerSettings;
