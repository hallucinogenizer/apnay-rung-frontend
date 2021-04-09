import React, { useState } from "react";
import "./styles.css";
import "./momina.css";
import Logo from "./css/logo.png";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import { Link } from "react-router-dom";
// import Button from "@material-ui/core/Button";
// import { makeStyles } from "@material-ui/core/styles";
// import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";

const SellerNavbar = () => {
  const [home, setHome] = useState(false);
  const [panel, setPanel] = useState(false);
  const [tutorial, setTutorial] = useState(false);
  const [aboutus, setAboutus] = useState(false);
  const [inventory, setInventory] = useState(false);

  const setHomeClass = () => {
    setHome(true);
    setPanel(false);
    setTutorial(false);
    setAboutus(false);
    setInventory(false);
  };
  const setPanelClass = () => {
    setHome(false);
    setPanel(true);
    setTutorial(false);
    setAboutus(false);
    setInventory(false);
  };
  const setTutorialClass = () => {
    setHome(false);
    setPanel(false);
    setTutorial(true);
    setAboutus(false);
    setInventory(false);
  };
  const setAboutClass = () => {
    setHome(false);
    setPanel(false);
    setTutorial(false);
    setAboutus(true);
    setInventory(false);
  };
  const setInventoryClass = () => {
    setHome(false);
    setPanel(false);
    setTutorial(false);
    setAboutus(false);
    setInventory(true);
  };
  return (
    <div className="Topbar" id="myTopnav">
      <img className="logo" src={Logo} alt="logo" />
      <Link
        to="/Homepage"
        onClick={setHomeClass}
        className={home ? "active" : ""}
      >
        Home
      </Link>
      <Link
        to="/SellerPanel"
        onClick={setPanelClass}
        className={panel ? "active" : ""}
      >
        {" "}
        Panel
      </Link>
      <Link
        to="/Inventory"
        onClick={setInventoryClass}
        className={inventory ? "active" : ""}
      >
        Inventory
      </Link>
      <Link
        to="/Tutorials"
        onClick={setTutorialClass}
        className={tutorial ? "active" : ""}
      >
        Tutorials
      </Link>
      <Link
        to="/Homepage"
        onClick={setAboutClass}
        className={aboutus ? "active" : ""}
      >
        About Us
      </Link>

      <p>
        Rohan Hussain
        <br /> Seller
      </p>
      <Link to="/HomePage">
        <button href="#cart" className="test-logout-seller">
          <span>
            <ExitToAppIcon className="rotate-180" />
            {/* Logout */}
          </span>
          <span className="text">Logout</span>
        </button>
      </Link>
      <Link to="/Notifications">
        <button href="#cart" className="test-notifications-seller">
          <span>
            <NotificationsNoneIcon />
            {/* Logout */}
          </span>
        </button>
      </Link>
    </div>
  );
};
export default SellerNavbar;
