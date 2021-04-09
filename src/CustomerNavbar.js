import React, { useState } from "react";
import "./styles.css";
import Logo from "./css/logo.png";
import { Link } from "react-router-dom";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import SearchIcon from "@material-ui/icons/Search";

const CustomerNavbar = () => {
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

  const logout = () => {
    return (
      <div>
        <ExitToAppIcon /> Logout
      </div>
    );
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
        to="/CustomerPanel"
        onClick={setPanelClass}
        className={panel ? "active" : ""}
      >
        Panel
      </Link>
      <Link
        to="/Catalog"
        onClick={setCatalogClass}
        className={catalog ? "active" : ""}
      >
        Catalog
      </Link>
      <Link
        to="/CustomerPanel"
        onClick={setArtisanClass}
        className={artisans ? "active" : ""}
      >
        Artisans
      </Link>
      <Link
        to="/CustomerPanel"
        onClick={setAboutClass}
        className={aboutus ? "active" : ""}
      >
        About Us
      </Link>
      <Link
        to="/CustomerPanel"
        onClick={setContactClass}
        className={contact ? "active" : ""}
      >
        Contact
      </Link>
      <p>
        Rohan Hussain <br /> Customer
      </p>
      <Link to="/HomePage">
        <button href="#cart" className="test-logout-customer">
          <span>
            <ExitToAppIcon className="rotate-180" />
            {/* Logout */}
          </span>
          <span className="text">Logout</span>
        </button>
      </Link>
      <Link to="/ShoppingCart">
        <button href="#cart" className="test-cart">
          <span>
            <ShoppingCartIcon />
            {/* Logout */}
          </span>
          <span className="text">Cart</span>
        </button>
      </Link>
      <Link to="/Notifications">
        <button href="#cart" className="test-notifications-customer">
          <span>
            <NotificationsNoneIcon />
            {/* Logout */}
          </span>
        </button>
      </Link>
      <Link to="/Notifications">
        <button href="#cart" className="test-search">
          <span>
            <SearchIcon />
            {/* Logout */}
          </span>
        </button>
      </Link>
    </div>
  );
};

export default CustomerNavbar;
