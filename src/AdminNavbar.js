import React, { useState, useEffect } from "react";
import "./styles.css";
import "./momina.css";
import "./maham.css";
import Logo from "./css/logo.png";
import { Link } from "react-router-dom";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";

const AdminNavbar = () => {
    let tokenID = localStorage.getItem("Token");
    const [userstate, setUserState] = useState([]);
    
    useEffect(() => {
        const getData = async (url) => {
          const response = await fetch(url, {
            method: "GET",
            withCredentials: true,
            credentials: "include",
            headers: {
              Authorization:
                `Bearer ${tokenID}`,
              "Content-Type": "application/json"
            }
          });
          return response.json();
        };
     
        getData("https://apnay-rung-api.herokuapp.com/admin/info").then(
        (response) => {
          console.log(`admin navbar response: ${response}`)
          setUserState(response);
          
          // console.log("intiil value", userstate);
        }
      );
      }, []);
      const LogoutClear = () =>{
        localStorage.removeItem("Token");
        localStorage.clear();
        sessionStorage.clear();
      }
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
                <Link to="/AdminPanel">
                <a className="nav-item nav-link">Panel</a>
                </Link>
                <Link to="/Catalog">
                <a className="nav-item nav-link">Catalog</a>
                </Link>
                <Link to="/QueryForms">
                <a className="nav-item nav-link">Contact</a>
                </Link>
                {/* <a  className="nav-item nav-link disabled" tabindex="-1">Contact</a> */}
            </div>
            <div className="navbar-nav ml-auto">
                <Link to="/AdminPanel">
                    <a className="nav-item nav-link">
                    <NotificationsNoneIcon />
                    </a>
                </Link>
                <Link to="/Homepage" >
                    <a className="nav-item nav-link" onClick={()=>LogoutClear()}>
                    <ExitToAppIcon className="rotate-180" />Logout
                    </a>
                </Link>
                <a className="nav-item nav-link">{userstate.name}</a>
                
            </div>
                
        </div>
        </nav>
    </div>
    </div>
    )
}

export default AdminNavbar;