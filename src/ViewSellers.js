import "./styles.css";
import AdminNavbar from "./AdminNavbar";
import { useState } from "react";
import Memory from "./Memory";
import BottomBar from "./BottomBar";
import PersonAddDisabledIcon from "@material-ui/icons/PersonAddDisabled";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import FlashOnIcon from "@material-ui/icons/FlashOn";
// import "bootstrap/dist/css/bootstrap.css";
const ViewSellers = () => {
  const [state, setState] = useState([
    {
      seller_id: 0,
      name: "",
      email: "",
      cnic: "",
      location: "",
      bio: null,
      weeklyartisan: false,
      blocked: true,
      profile_picture: null
    }
  ]);

  async function getData(url) {
    const response = await fetch(url, {
      method: "GET",
      withCredentials: true,
      credentials: "include",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ik11aGFtbWFkIFJvaGFuIEh1c3NhaW4iLCJ0eXBlT2ZVc2VyIjoiYWRtaW4iLCJpYXQiOjE2MTY4NDE4MTZ9.HJvh_8caLMReaDmJFCEklgtP9u86usbNIZ4FxOrIawk",
        "Content-Type": "application/json"
      }
    });

    return response.json();
  }

  getData("https://apnay-rung-api.herokuapp.com/seller/all").then(
    (response) => {
      console.log(response);
      setState(response);
    }
  );

  const Block = (blockStatus) => {
    if (blockStatus === false) {
      return (
        <a href="#delete" className="link">
          <PersonAddDisabledIcon
            style={{
              fontSize: "medium"
            }}
          />
          Block
        </a>
      );
    } else {
      return (
        <a href="#delete" className="link">
          <PersonAddIcon
            style={{
              fontSize: "medium"
            }}
          />
          Unblock
        </a>
      );
    }
  };

  const Spotlight = (weeklyartisan) => {
    if (weeklyartisan === false) {
      return (
        <a href="#delete" className="link">
          <FlashOnIcon
            style={{
              fontSize: "medium"
            }}
          />
          Spotlight
        </a>
      );
    } else {
      return (
        <a href="#delete" className="link">
          <FlashOnIcon
            style={{
              fontSize: "medium"
            }}
          />
          Remove Spotlight
        </a>
      );
    }
  };
  const renderTableData = () => {
    return state.map((seller, index) => {
      const {
        seller_id,
        name,
        email,
        cnic,
        location,
        bio,
        weeklyartisan,
        blocked,
        profile_picture,
        phone
      } = seller; //destructuring
      return (
        <tr class="data">
          <td>{seller_id}</td>
          <td>{name}</td>
          <td>{email}</td>
          <td>{location}</td>
          <td>{phone}</td>
          <td>
            {Block(blocked)}
            <br></br>
            {Spotlight(weeklyartisan)}
          </td>
        </tr>
      );
    });
  };

  return (
    <div>
      <AdminNavbar />
      <Memory panel="Admin Panel " page="" current=" View Sellers" />{" "}
      {/* when three links needed in panel, include a '/' in the middle 'page' argument */}
      <h1>View Sellers </h1>
      <div class="table-responsive">
        <table class="table table-size">
          <thead>
            <tr class="top-row">
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{renderTableData()}</tbody>
        </table>
      </div>
      <BottomBar />
    </div>
  );
};

export default ViewSellers;
