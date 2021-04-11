import React, { useState, useEffect } from "react";
import "./styles.css";
import "./momina.css";
import "./maham.css";
import Logo from "./css/logo.png";
import { Link } from "react-router-dom";

const HomeNavbar = () => {
    return (
        <div>
        <div className="bs-example">
        <nav className="navbar navbar-expand-md navbar-light bg-light">
        <Link to="/Homepage">
        <a className="navbar-brand">
        <img src={Logo} height="28" alt="CoolBrand"/>
        </a>
        </Link>
        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav">
                <Link to="/Homepage">
                <a className={`nav-item nav-link`}>Home</a>
                </Link>
                <Link to="/Catalog">
                <a className="nav-item nav-link">Catalog</a>
                </Link>
                <a className="nav-item nav-link disabled" tabindex="-1">Artisans</a>
                <a  className="nav-item nav-link disabled" tabindex="-1">About Us</a>
                <a  className="nav-item nav-link disabled" tabindex="-1">Contact</a>
            </div>
            <div className="navbar-nav ml-auto">
                <Link to="/Login">
                <a className="nav-item nav-link">Login</a>
                </Link>
                <Link to="/SignupCustomer">
                <a className="nav-item nav-link">Signup</a>
                </Link>
                
            </div>
        </div>
        </nav>
    </div>
    </div>
    )
}

export default HomeNavbar;