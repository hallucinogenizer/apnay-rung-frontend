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
import React, { useState } from "react";

const CustomerPanel = () => {
  let link = ``;
  const storage = JSON.parse(localStorage.getItem("shoppingCart"));
  if (storage !== null) {
    link = "/ShoppingCart";
  } else {
    link = "/CustomerPanel";
  }

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  return (
    <div>
      <CustomerNavbar currentPage="CustomerPanel" />
      <Memory panel="Customer Panel" /> {/* <page="" current="" /> */}
      {/* when three links needed in panel, include a '/' in the middle 'page' argument */}
      <h1>Customer Panel</h1>
      <br></br>
      <br></br>
      <div className="all-boxes">
        <div className="box-left">
          <div className="box-left-left">
            <Link
              to={link}
              className="router-link"
              onClick={() => handleShow()}
            >
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
          <div className="box-left-left">
            <Link to="/CustomerPanel" className="router-link">
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
          <div className="box-left-left">
            <Link to="/CustomerPanel" className="router-link">
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
            </Link>
          </div>
        </div>
        <div className="box-right">
          <div className="box-right-right">
            <Link to="/CustomerPanel" className="router-link">
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
          <div className="box-right-right">
            <Link to="/CustomerPanel" className="router-link">
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
      </div>
      <BottomBar />
      <Modal show={show} onHide={handleClose} className="delete-modal">
        <Modal.Header closeButton>
          <Modal.Title>Empty</Modal.Title>
        </Modal.Header>
        <Modal.Body>Shopping Cart is Empty</Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            className="delete-primary"
            onClick={handleClose}
          >
            Back
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default CustomerPanel;
