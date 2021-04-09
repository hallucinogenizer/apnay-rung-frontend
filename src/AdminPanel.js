import "./styles.css";
// import { useState } from "react";
import AdminNavbar from "./AdminNavbar";
import Memory from "./Memory";
import BottomBar from "./BottomBar";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Modal, Button } from "react-bootstrap";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import SettingsIcon from "@material-ui/icons/Settings";
import GroupOutlinedIcon from "@material-ui/icons/GroupOutlined";
import GroupIcon from "@material-ui/icons/Group";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import NextWeekIcon from "@material-ui/icons/NextWeek";
import MenuIcon from "@material-ui/icons/Menu";
import EmailIcon from "@material-ui/icons/Email";
import CastForEducationIcon from "@material-ui/icons/CastForEducation";
import { Link } from "react-router-dom";

const AdminPanel = () => {
  return (
    <div>
      <AdminNavbar />
      <Memory panel="Admin Panel" /> {/* <page="" current="" /> */}
      {/* when three links needed in panel, include a '/' in the middle 'page' argument */}
      <h1>Admin Panel</h1>
      <br></br>
      <br></br>
      <div className="all-boxes">
        <div className="box-left">
          <Link to="/ViewCustomers" className="router-link">
            <button href="#buyers" className="panel-box">
              <span className="icons">
                <GroupOutlinedIcon
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
              <span className="text">View All Buyers</span>
            </button>
          </Link>
        </div>
        <div className="box-right">
          <Link to="/ViewSellers" className="router-link">
            <button href="#sellers" className="panel-box">
              <span className="icons">
                <GroupIcon
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
              <span className="text">View All Sellers</span>
            </button>
          </Link>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="all-boxes">
        <div className="box-left">
          <Link to="/ViewAllProducts" className="router-link">
            <button href="#products" className="panel-box">
              <span className="icons">
                <AddShoppingCartIcon
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
              <span className="text">View All Products</span>
            </button>
          </Link>
        </div>
        <div className="box-right">
          <Link to="/Catalog" className="router-link">
            <button href="#catalog" className="panel-box">
              <span className="icons">
                <NextWeekIcon
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
              <span className="text">View Catalog</span>
            </button>
          </Link>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="all-boxes">
        <div className="box-left">
          <Link to="/ViewOrders" className="router-link">
            <button href="#orders" className="panel-box">
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
              <span className="text">View All Orders</span>
            </button>
          </Link>
        </div>
        <div className="box-right">
          <Link to="/QueryForms" className="router-link">
            <button href="#forms" className="panel-box">
              <span className="icons">
                <EmailIcon
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
              <span className="text">Query Forms</span>
            </button>
          </Link>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="all-boxes">
        <div className="box-left">
          <Link to="/Tutorials" className="router-link">
            <button href="#tutorials" className="panel-box">
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
          </Link>
        </div>
        <div className="box-right">
          <Link to="/AdminSettings" className="router-link">
            <button href="#settings" className="panel-box">
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
      <br></br>
      <br></br>
      <div className="all-boxes">
        <div className="box-left">
          <Link to="/Notifications" className="router-link">
            <button href="#notifications" className="panel-box">
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
        <div className="box-right">
          <Link to="/ApproveSellers" className="router-link">
            <button href="#cart" className="panel-box">
              <span className="icons">
                <GroupOutlinedIcon
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
              <span className="text">Approve Sellers</span>
            </button>
          </Link>
        </div>
      </div>
      <BottomBar />
    </div>
  );
};

export default AdminPanel;
