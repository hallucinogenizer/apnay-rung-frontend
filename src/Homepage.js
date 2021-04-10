import "./styles.css";
import "./maham.css";
import HomeNavbar from "./HomeNavbar";
import BottomBar from "./BottomBar";
import logo from "./css/logo.png";
import home from "./css/home.png";
import wpf from "./css/wpf.png";
import gpp from "./css/gpp.png";
import handshake from "./css/handshake.png";
import pk from "./css/pk.svg";
import { Link } from "react-router-dom";
import React, { useState } from "react";
//temporary//

import "bootstrap/dist/css/bootstrap.css";

const Homepage = () => {
  const [productState, setProductState] = useState([]);
  const [sellerState, setSellerState] = useState([]);
  const tokenID = JSON.parse(localStorage.getItem("Token"));

  const getData = async (url) => {
    const response = await fetch(url, {
      method: "GET",
      withCredentials: true,
      credentials: "include",
      headers: {
        Authorization: `Bearer ${tokenID}`,
        "Content-Type": "application/json"
      }
    });
    return response.json();
  };

  getData("https://apnay-rung-api.herokuapp.com/inventory/limit/8").then(
    (response) => {
      setProductState(response);
    }
  );
  getData("https://apnay-rung-api.herokuapp.com/seller/limit/3").then(
    (response) => {
      setSellerState(response);
    }
  );
  const renderProducts = () => {
    return productState.map((product, index) => {
      const { title, seller_id, price, image } = product; //destructuring
      return (
        <div className="product-div">
          <img className="product-img" src={image} alt="product" />
          <h3>{title}</h3>
          <h5>Artist: {seller_id}</h5>
          <h5>Price: Rs {price}</h5>
        </div>
      );
    });
  };
  const renderSellers = () => {
    return sellerState.map((seller, index) => {
      const { name, location, profile_picture } = seller;
      return (
        <div className="seller-main">
          <img
            className="main-artist-image"
            src={profile_picture}
            alt="seller"
          />
          <div>
            <p className="main-text-seller">{name}</p>
            <p className="main-text-seller2">{location}</p>
          </div>
        </div>
      );
    });
  };
  return (
    <div>
      <HomeNavbar />
      <span>
        <img className="logo-main" src={logo} alt="logo" />
        <h1 className="main-title">APNAY RUNG</h1>
      </span>
      <div className="container">
        <img className="home-background" src={home} alt="home" />
        <h2 className="home-text">DISCOVER | CONNECT | EMPOWER</h2>
      </div>
      <div className="main">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search Products"
          ></input>
          <div className="input-group-append">
            <button className="btn btn-secondary" type="button">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
      </div>
      <p className="featured-prod">Featured Products </p>
      <div className="itemboxes">{renderProducts()}</div>
      <div className="orange-home-bar">
        <p>
          Bringing together indigenous art of Pakistan straight to your doorstep
        </p>
      </div>
      <p className="featured-prod">Explore Art by Region </p>
      <div id="image_map">
        <map name="map_example">
          <Link to="/Catalog" className="router-link">
            <area
              //sindh
              alt="Facebook"
              target="_blank"
              shape="poly"
              coords="190,460, 195,350, 270,330, 310,450"
            ></area>
          </Link>
          <Link to="/Catalog" className="router-link">
            <area
              //balochistan
              alt="Facebook"
              target="_blank"
              shape="poly"
              coords="30,430, 180,430, 180,330, 260,310, 270,200, 30,300"
            ></area>
          </Link>
          <Link to="/Catalog" className="router-link">
            <area
              //punjab
              alt="Facebook"
              target="_blank"
              shape="poly"
              coords="280,300, 320,340, 435,190, 350,130"
            ></area>
          </Link>
          <Link to="/Catalog" className="router-link">
            <area
              //kpk
              target="_blank"
              alt="Wikipedia Social Media Article"
              shape="poly"
              coords="256,180, 295,207, 395,90, 330,30"
            ></area>
          </Link>
          <Link to="/Catalog" className="router-link">
            <area
              //gilgit
              target="_blank"
              alt="Wikipedia Social Media Article"
              shape="poly"
              coords="366,40, 460,100, 495,70, 430,10"
            ></area>
          </Link>
        </map>
        <img
          src={pk}
          className="flag-image"
          alt="map example"
          usemap="#map_example"
        />
      </div>
      <br />
      <br />
      <br />
      <div className="grey-home-bar">
        <p>Face of the Art</p>
      </div>
      <div className="">{renderSellers()}</div>
      <div className="grey-grey">
        <div className="grey-main">
          <img className="end-main-image" src={handshake} alt="end" />
          <br />
          Trustworthy Sellers
          <br />
          Our sellers are verified and trustworthy.
        </div>
        <div className="grey-main">
          <img className="end-main-image" src={wpf} alt="end" />
          <br />
          Cooperative Support Team
          <br />
          In case of any query of concern, our team is happy to assist.
        </div>
        <div className="grey-main">
          <img className="end-main-image" src={gpp} alt="end" />
          <br />
          High Quality Products
          <br />
          Apnay Rung ensures that our customers always receive top quality
          products.
        </div>
      </div>
      <br />
      <br />
      <br />
      <BottomBar />
    </div>
  );
};

export default Homepage;
