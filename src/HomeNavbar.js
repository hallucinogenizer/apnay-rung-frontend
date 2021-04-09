import React, { useState } from "react";
import "./styles.css";
import Logo from "./css/logo.png";
import { Link } from "react-router-dom";

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
    console.log(`home is now ${home}`);
  };
  const setPanelClass = () => {
    setHome(false);
    setPanel(true);
    setArtisans(false);
    setCatalog(false);
    setContact(false);
    setAboutus(false);
    console.log(`home is now ${home}`);
  };
  const setArtisanClass = () => {
    setHome(false);
    setPanel(false);
    setArtisans(true);
    setCatalog(false);
    setContact(false);
    setAboutus(false);
    console.log(`home is now ${home}`);
  };
  const setCatalogClass = () => {
    setHome(false);
    setPanel(false);
    setArtisans(false);
    setCatalog(true);
    setContact(false);
    setAboutus(false);
    console.log(`home is now ${home}`);
  };
  const setContactClass = () => {
    setHome(false);
    setPanel(false);
    setArtisans(false);
    setCatalog(false);
    setContact(true);
    setAboutus(false);
    console.log(`home is now ${home}`);
  };
  const setAboutClass = () => {
    setHome(false);
    setPanel(false);
    setArtisans(false);
    setCatalog(false);
    setContact(false);
    setAboutus(true);
    console.log(`home is now ${home}`);
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
      <input type="button" className="logout_button" value="Signup" />
      <input type="button" className="logout_button" value="Login" />
    </div>
  );
};

export default HomeNavbar;
