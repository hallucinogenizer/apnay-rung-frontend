import "./styles.css";
import "./maham.css";
import CustomerNavbar from "./CustomerNavbar";
import AdminNavbar from "./AdminNavbar";
import HomeNavbar from "./HomeNavbar";
import React, { useState, useEffect } from "react";
import Memory from "./Memory";
import BottomBar from "./BottomBar";
import { Link } from "react-router-dom";
import SellerNavbar from "./SellerNavbar";
// import "bootstrap/dist/css/bootstrap.min.css";

const Catalog = () => {
  const [state, setState] = useState([]);
  const usertype = localStorage.getItem("TypeOfUser");
  const tokenID = localStorage.getItem("Token");
  console.log("token", tokenID);
  const GetNavbar = () =>{
    if (tokenID === null){
      return (
        <HomeNavbar/>
      )
    }
    else if (usertype === "customer"){
      return(
        <CustomerNavbar/>
      )
    }
    else if (usertype === "admin"){
      return (
        <AdminNavbar/>
      )
    }
    else if (usertype === "seller"){
      return (
        <SellerNavbar/>
      )
    }
  }
  
  useEffect(() => {
    const getData = async (url) => {
      const response = await fetch(url, {
        method: "GET",
        withCredentials: false
      });
      return response.json();
    };
 
    getData("https://apnay-rung-api.herokuapp.com/inventory/all").then(
      (response) => {
        setState(response);
        console.log(`I am here:${response}`)
      }
    );
  }, []);

  const sendID = (product) => {
    localStorage.removeItem("productID");
    localStorage.setItem("productID", JSON.stringify(product));
  };

  const renderProducts = () => {
    return state.map((product, index) => {
      const { title, seller_name, price, image } = product; //destructuring
      return (
        <Link to="/Product" className="route" onClick={() => sendID(product)}>
          <div className="product-div">
            <img className="product-img" src={image} alt="product" />
            <h3>{title}</h3>
            <h5>Artist: {seller_name}</h5>
            <h5>Price: Rs {price}</h5>
          </div>
        </Link>
      );
    });
  };

  return (
    <div>
      {GetNavbar()}
      {/* <CustomerNavbar /> */}
      <Memory panel="" page="" current="Catalog" />{" "}
      {/* when three links needed in panel, include a '/' in the middle 'page' argument */}
      <h1>Catalog</h1>
      <br></br>
      <ul className="sortbar">
        <li className="dropbtn">
          <a href="#home">Sort A-Z</a>
        </li>
        <li className="dropbtn">
          <a href="#news">Sort $ - $$</a>
        </li>
        <li className="dropdown">
          <button className="dropbtn">Filter by Region</button>
          <div className="dropdown-content" id="mydropdown">
            <a href="#">Punjab</a>
            <a href="#">Sindh</a>
            <a href="#">Balochistan</a>
            <a href="#">KPK</a>
            <a href="#">Gilgit-Baltistan</a>
          </div>
        </li>
      </ul>
      <div className="search-catalog">
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
      <br />
      <div className="space"></div>
      <div className="catalog-adjust">{renderProducts()}</div>
      {/* <div class="itemboxes">{renderProducts()}</div> */}
      <BottomBar />
    </div>
  );
};

export default Catalog;
