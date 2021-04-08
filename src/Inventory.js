import "./styles.css";
import { useState } from "react";
import SellerNavbar from "./SellerNavbar";
import Memory from "./Memory";
import BottomBar from "./BottomBar";

const Inventory = () => {
  const [state, setState] = useState([
    {
      image: "",
      title: "",
      price: 0,
      quantityInStock: 0
    }
  ]);

  async function getData(url) {
    const response = await fetch(url, {
      method: "GET",
      withCredentials: true,
      credentials: "include",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwibmFtZSI6IlZhZmEgQmF0b29sIiwidHlwZU9mVXNlciI6InNlbGxlciIsImlhdCI6MTYxNjg0NDE3N30.xYaUcX7dmdqY5co2tMbVA_9jh0M1fVBB-AX0Aam5G7Y",
        "Content-Type": "application/json"
      }
    });

    return response.json();
  }

  getData("https://apnay-rung-api.herokuapp.com/inventory/all").then(
    (response) => {
      console.log(response);
      setState(response);
    }
  );

  const renderTableData = () => {
    return state.map((product, index) => {
      const { image, title, stock, price, quantityInStock } = product; //destructuring
      return (
        <tr className="data">
          <td>
            <img src={image[0]} alt="Italian Trulli" id="image" />
          </td>
          <td>{title}</td>
          <td>{price}</td>
          <td>{stock}</td>
          <td>
            <a href="#delete" className="link">
              View
            </a>
            |
            <a href="#delete" className="link">
              Update
            </a>
            |
            <a href="#delete" className="link">
              Delete
            </a>
          </td>
        </tr>
      );
    });
  };

  return (
    <div>
      <SellerNavbar />
      {/* <Memory panel="" page="" current=" Inventory" />{" "} */}
      <Memory panel="Seller Panel" page="" current="View All Customers" />{" "}
      {/* when three links needed in panel, include a '/' in the middle 'page' argument */}
      <h1>Inventory </h1>
      <div className="table-responsive">
        <table className="table table-size">
          <thead>
            <tr className="top-row">
              <th>Product</th>
              <th>Title</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{renderTableData()}</tbody>
        </table>
      </div>
      <BottomBar />
    </div>
  );
};
export default Inventory;
