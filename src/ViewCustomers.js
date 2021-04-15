import "./styles.css";
import { useState } from "react";
import AdminNavbar from "./AdminNavbar";
import Memory from "./Memory";
import BottomBar from "./BottomBar";
import PersonAddDisabledIcon from "@material-ui/icons/PersonAddDisabled";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import PersonAddIcon from "@material-ui/icons/PersonAdd";

const ViewCustomers = () => {
  const [state, setState] = useState([
    {
      customer_id: 0,
      name: "",
      email: "",
      address: "",
      phone: null,
      blocked: false
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

  getData("https://apnay-rung-api.herokuapp.com/customer/all").then(
    (response) => {
      console.log(response);
      setState(response);
    }
  );
  // let state = {
  //   //state is by default an object
  //   customers: [
  //     {
  //       ID: "1",
  //       name: "Wasif",
  //       email: "wasif@gmail.com",
  //       address: "221B Bakers Street",
  //       phone: "03214456789",
  //       blockStatus: false
  //     },
  //     {
  //       ID: "1",
  //       name: "Wasif",
  //       email: "wasif@gmail.com",
  //       address: "221B Bakers Street",
  //       phone: "03214456789",
  //       blockStatus: false
  //     },
  //     {
  //       ID: "1",
  //       name: "Wasif",
  //       email: "wasif@gmail.com",
  //       address: "221B Bakers Street",
  //       phone: "03214456789",
  //       blockStatus: false
  //     },
  //     {
  //       ID: "1",
  //       name: "Wasif",
  //       email: "wasif@gmail.com",
  //       address: "221B Bakers Street",
  //       phone: "03214456789",
  //       blockStatus: true
  //     }
  //   ]
  // };

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
  const renderTableData = () => {
    return state.map((customer, index) => {
      const { ID, name, email, address, phone, blockStatus } = customer; //destructuring
      return (
        <tr class="data">
          <td>{ID}</td>
          <td>{name}</td>
          <td>{email}</td>
          <td>{address}</td>
          <td>{phone}</td>
          <td>{Block(blockStatus)}</td>
        </tr>
      );
    });
  };

  return (
    <div>
      <AdminNavbar />
      <Memory panel="Admin Panel " page="" current=" View All Customers" />{" "}
      {/* when three links needed in panel, include a '/' in the middle 'page' argument */}
      <h1>View All Customers </h1>
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

export default ViewCustomers;
