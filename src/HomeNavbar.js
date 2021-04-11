import React, { useState } from "react";
import "./styles.css";
import "./momina.css";
import Logo from "./css/logo.png";
import { Link } from "react-router-dom";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
const HomeNavbar = () => {
  {
    /* will need to add local storage state to keep the state from being deleted after refresh */
  }
  const [home, setHome] = useState(false);
  const [panel, setPanel] = useState(false);
  const [catalog, setCatalog] = useState(false);
  const [artisans, setArtisans] = useState(false);
  const [aboutus, setAboutus] = useState(false);
  const [contact, setContact] = useState(false);

  const setHomeClass = () => {
    setHome(true);
    setPanel(false);
    setArtisans(false);
    setCatalog(false);
    setContact(false);
    setAboutus(false);
  };
  const setPanelClass = () => {
    setHome(false);
    setPanel(true);
    setArtisans(false);
    setCatalog(false);
    setContact(false);
    setAboutus(false);
  };
  const setArtisanClass = () => {
    setHome(false);
    setPanel(false);
    setArtisans(true);
    setCatalog(false);
    setContact(false);
    setAboutus(false);
  };
  const setCatalogClass = () => {
    setHome(false);
    setPanel(false);
    setArtisans(false);
    setCatalog(true);
    setContact(false);
    setAboutus(false);
  };
  const setContactClass = () => {
    setHome(false);
    setPanel(false);
    setArtisans(false);
    setCatalog(false);
    setContact(true);
    setAboutus(false);
  };
  const setAboutClass = () => {
    setHome(false);
    setPanel(false);
    setArtisans(false);
    setCatalog(false);
    setContact(false);
    setAboutus(true);
  };
  return (
    <div className="Topbar" id="myTopnav">
      <img className="logo" src={Logo} alt="logo" />
      <Link
        to="/Homepage"
        className="router-link"
        onMouseEnter={setHomeClass}
        className={home ? "active" : ""}
      >
        Home
      </Link>
      <Link
        to="/Catalog"
        // className="router-link"
        onMouseEnter={setCatalogClass}
        className={catalog ? "active" : ""}
      >
        Catalog
      </Link>
      <Link
        to="/Artisan"
        // className="router-link"
        onMouseEnter={setArtisanClass}
        className={artisans ? "active" : ""}
      >
        Artisans
      </Link>
      <Link
        to="/AboutUs"
        // className="router-link"
        onMouseEnter={setAboutClass}
        className={aboutus ? "active" : ""}
      >
        About Us
      </Link>
      <Link
        to="/Contact"
        // className="router-link"
        onMouseEnter={setContactClass}
        className={contact ? "active" : ""}
      >
        Contact
      </Link>
      <div className="home-button">
        <Link to="/SignupCustomer">
          <input type="button" className="logout_button" value="Signup" />
        </Link>
        <Link to="/Login">
          <input type="button" className="logout_button" value="Login" />
        </Link>
      </div>
    </div>
  );
};

export default HomeNavbar;
