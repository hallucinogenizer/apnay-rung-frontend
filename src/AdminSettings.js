import "./styles.css";
import AdminNavbar from "./AdminNavbar";
import Memory from "./Memory";
import BottomBar from "./BottomBar";
import { useState } from "react";
import back_image from "./css/back.png";

const AdminSettings = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [currPass, setCurrPass] = useState();
  const [newPass, setNewPass] = useState();

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

  return (
    <div>
      <AdminNavbar />
      <Memory panel="Admin Panel" page="" current="Account Settings" />{" "}
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
      </form>
      <br />
      <input type="submit" className="submit-button" value="Submit"></input>
      <BottomBar />
    </div>
  );
};

export default AdminSettings;
