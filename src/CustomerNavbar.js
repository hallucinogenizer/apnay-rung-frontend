import React, { useState, useEffect } from "react";
import "./styles.css";
import "./momina.css";
import Logo from "./css/logo.png";
import { Link } from "react-router-dom";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import SearchIcon from "@material-ui/icons/Search";
// import { Modal, Button } from "react-bootstrap";

const CustomerNavbar = (props) => {
  const [userstate, setUserState] = useState([]);
  const [home, setHome] = useState(false);
  const [panel, setPanel] = useState(false);
  const [catalog, setCatalog] = useState(false);
  const [artisans, setArtisans] = useState(false);
  const [aboutus, setAboutus] = useState(false);
  const [contact, setContact] = useState(false);
  let tokenID = localStorage.getItem("Token");
  useEffect(() => {
    const getData = async (url) => {
      const response = await fetch(url, {
        method: "GET",
        withCredentials: true,
        credentials: "include",
        headers: {
          Authorization:
            `Bearer ${tokenID} `,
          "Content-Type": "application/json"
        }
      });
      return response.json();
    };
 
    getData("https://apnay-rung-api.herokuapp.com/customer/info").then(
    (response) => {
      console.log(`customer navbar response: ${response}`)
      setUserState(response);
      
      // console.log("intiil value", userstate);
    }
  );
  }, []);
  const LogoutClear = () =>{
    localStorage.removeItem("Token");
  }
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

  // const logout = () => {
  //   return (
  //     <div>
  //       <ExitToAppIcon /> Logout
  //     </div>
  //   );
  // };

  return (
    <div className="Topbar" id="myTopnav">
      <img className="logo" src={Logo} alt="logo" />
      <Link
        to="/Homepage"
        onMouseLeave={setHomeClass}
        className={home ? "active" : ""}
      >
        Home
      </Link>
      <Link
        to="/CustomerPanel"
        onMouseLeave={setPanelClass}
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
        to="/Homepage"
        onClick={setArtisanClass}
        className={artisans ? "active" : ""}
      >
        Artisans
      </Link>
      <Link
        to="/Homepage"
        onClick={setAboutClass}
        className={aboutus ? "active" : ""}
      >
        About Us
      </Link>
      <Link
        to="/Homepage"
        onClick={setContactClass}
        className={contact ? "active" : ""}
      >
        Contact
      </Link>
      <p>
        {userstate.name} <br /> Customer
      </p>
      <div className="nav-button">
        <Link to="/Homepage">
          <button href="#cart" className="test-search">
            <span>
              <SearchIcon />
            </span>
          </button>
        </Link>
        <Link to="/Homepage">
          <button href="#cart" className="test-notifications-customer">
            <span>
              <NotificationsNoneIcon />
            </span>
          </button>
        </Link>
        <Link to="/ShoppingCart">
          <button href="#cart" className="test-cart">
            <span>
              <ShoppingCartIcon />
            </span>
            <span className="text">Cart</span>
          </button>
        </Link>
        <Link to="/HomePage">
          <button href="#cart" className="test-logout-customer" onClick={LogoutClear}>
            <span>
              <ExitToAppIcon className="rotate-180" />
            </span>
            <span className="text">Logout</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CustomerNavbar;
