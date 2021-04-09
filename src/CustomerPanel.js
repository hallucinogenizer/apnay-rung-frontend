import "./styles.css";
// import { useState } from "react";
import CustomerNavbar from "./CustomerNavbar";
import Memory from "./Memory";
import BottomBar from "./BottomBar";
import "bootstrap/dist/css/bootstrap.min.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Modal, Button } from "react-bootstrap";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import RateReviewIcon from "@material-ui/icons/RateReview";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import SettingsIcon from "@material-ui/icons/Settings";
import { Link } from "react-router-dom";

const CustomerPanel = () => {
  return (
    <div>
      <CustomerNavbar />
      <Memory panel="Cutomer Panel" /> {/* <page="" current="" /> */}
      {/* when three links needed in panel, include a '/' in the middle 'page' argument */}
      <h1>Customer Panel</h1>
      <br></br>
      <br></br>
      <div className="all-boxes">
        <div className="box-left">
          <Link to="/ShoppingCart" className="router-link">
            <button href="#cart" className="panel-box">
              <span className="icons">
                <ShoppingCartIcon
                  style={
                    ({
                      fill: "white"
                    },
                    {
                      fontSize: 40
                    })
                  }
                />
              </span>
              <span className="text">Shopping Cart</span>
            </button>
          </Link>
        </div>
        <div className="box-right">
          <Link to="/OrderStatus" className="router-link">
            <button href="#cart" className="panel-box">
              <span className="icons">
                <LocalShippingIcon
                  style={
                    ({
                      fill: "white"
                    },
                    {
                      fontSize: 40
                    })
                  }
                />
              </span>
              <span className="text">Order Status</span>
            </button>
          </Link>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="all-boxes">
        <div className="box-left">
          <Link to="/AddReview" className="router-link">
            <button href="#cart" className="panel-box">
              <span className="icons">
                <RateReviewIcon
                  style={
                    ({
                      fill: "white"
                    },
                    {
                      fontSize: 40
                    })
                  }
                />
              </span>
              <span className="text">Add Review</span>
            </button>
          </Link>
        </div>
        <div className="box-right">
          <Link to="/Notifications" className="router-link">
            <button href="#cart" className="panel-box">
              <span className="icons">
                <NotificationsNoneIcon
                  style={
                    ({
                      fill: "white"
                    },
                    {
                      fontSize: 40
                    })
                  }
                />
              </span>
              <span className="text">Notifications</span>
            </button>
          </Link>
        </div>
      </div>
      <br></br>
      <br></br>
      <div>
        <Link to="/CustomerSettings" className="router-link">
          <button href="#cart" className="box-last panel-box">
            <span className="icons-last">
              <SettingsIcon
                style={
                  ({
                    fill: "white"
                  },
                  {
                    fontSize: 40
                  })
                }
              />
            </span>
            <span className="text-last">Account Settings</span>
          </button>
        </Link>
      </div>
      <BottomBar />
    </div>
  );
};
export default CustomerPanel;

