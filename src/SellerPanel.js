import "./styles.css";
// import { useState } from "react";
import SellerNavbar from "./SellerNavbar";
import Memory from "./Memory";
import BottomBar from "./BottomBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import RateReviewIcon from "@material-ui/icons/RateReview";
import QueueIcon from "@material-ui/icons/Queue";
import UpdateIcon from "@material-ui/icons/Update";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import SettingsIcon from "@material-ui/icons/Settings";
import MenuIcon from "@material-ui/icons/Menu";
import AssessmentIcon from "@material-ui/icons/Assessment";
import CastForEducationIcon from "@material-ui/icons/CastForEducation";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

const SellerPanel = () => {
  const session = sessionStorage.getItem("logged-in");
  const checkSession = () => {
    console.log("in here")
    if (session !== true){
      localStorage.setItem("msg",JSON.stringify("Please Log in to Continue"))
      window.location.href = '/Homepage';
    }
  }
  const iconStyles = ()=> {
    return {
      buttoncolor: {
        fill: 'white',
        fontSize: 40
      }
    }
  }
  const classes = makeStyles(iconStyles)();
  return (
    <div>
      {/* {checkSession()} */}
      <SellerNavbar />
      <Memory panel="Seller Panel" /> {/* <page="" current="" /> */}
      {/* when three links needed in panel, include a '/' in the middle 'page' argument */}
      <h1>Seller Panel</h1>
      <br></br>
      <br></br>
      <div className="all-boxes">
        <div className="box-left">
          
          <div className="box-left-left">
            <button href="#cart" className="panel-box">
              <span className="icons">
                <QueueIcon
                  className={classes.buttoncolor}
                />
              </span>
              <span className="text">Add Product</span>
            </button>
          </div>
          <div className="box-left-left">
            <button href="#cart" className="panel-box">
              <span className="icons">
                <CastForEducationIcon
                  className={classes.buttoncolor}
                />
              </span>
              <span className="text">Tutorials</span>
            </button>
          </div>
          <div className="box-left-left">
            <button href="#cart" className="panel-box">
              <span className="icons">
                <SettingsIcon
                  className={classes.buttoncolor}
                />
              </span>
              <span className="text">Account Settings</span>
            </button>
          </div>
        </div>
        <div className="box-right">
          
          <div className="box-right-right">
            <button href="#cart" className="panel-box">
              <span className="icons">
                <UpdateIcon
                  className={classes.buttoncolor}
                />
              </span>
              <span className="text">View Inventory</span>
            </button>
          </div>
          <div className="box-right-right">
            <button href="#cart" className="panel-box">
              <span className="icons">
                <NotificationsNoneIcon
                 className={classes.buttoncolor}
                />
              </span>
              <span className="text">Notifications</span>
            </button>
          </div>
          <div className="box-right-right">
            <button href="#cart" className="panel-box">
              <span className="icons">
                <MenuIcon
                  className={classes.buttoncolor}
                />
              </span>
              <span className="text">Current Orders</span>
            </button>
          </div>
        </div>
      </div>
      <BottomBar />
    </div>
  );
};

export default SellerPanel;
