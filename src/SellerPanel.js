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

const SellerPanel = () => {
  return (
    <div>
      <SellerNavbar />
      <Memory panel="Seller Panel" /> {/* <page="" current="" /> */}
      {/* when three links needed in panel, include a '/' in the middle 'page' argument */}
      <h1>Seller Panel</h1>
      <br></br>
      <br></br>
      <div className="all-boxes">
        <div className="box-left">
          <Link to="/Notifications" className="router-link">
            <button href="#cart" className="panel-box">
              <span className="icons">
                <AssessmentIcon
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
              <span className="text">Sales Report</span>
            </button>
          </Link>
        </div>
        <div className="box-right">
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
            <span className="text">Delivery Status</span>
          </button>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="all-boxes">
        <div className="box-left">
          <button href="#cart" className="panel-box">
            <span className="icons">
              <QueueIcon
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
            <span className="text">Add Product</span>
          </button>
        </div>
        <div className="box-right">
          <button href="#cart" className="panel-box">
            <span className="icons">
              <UpdateIcon
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
            <span className="text">View Inventory</span>
          </button>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="all-boxes">
        <div className="box-left">
          <button href="#cart" className="panel-box">
            <span className="icons">
              <CastForEducationIcon
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
            <span className="text">Tutorials</span>
          </button>
        </div>
        <div className="box-right">
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
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="all-boxes">
        <div className="box-left">
          <button href="#cart" className="panel-box">
            <span className="icons">
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
            <span className="text">Account Settings</span>
          </button>
        </div>
        <div className="box-right">
          <button href="#cart" className="panel-box">
            <span className="icons">
              <MenuIcon
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
            <span className="text">Current Orders</span>
          </button>
        </div>
      </div>
      <BottomBar />
    </div>
  );
};

export default SellerPanel;