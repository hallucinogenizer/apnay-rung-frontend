import "./styles.css";
import CustomerNavbar from "./CustomerNavbar";
import Memory from "./Memory";
import BottomBar from "./BottomBar";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { useState, useRef, useEffect } from "react";

const OrderConfirmation = () => {
  const fromLocalStorage = JSON.parse(localStorage.getItem("shoppingCart"));
  const [state, setState] = useState(fromLocalStorage);
  const [total, setTotal] = useState(0);

  let address = "Sherlock Holmes, 221B Bakers Street";

  const renderBill = () => {
    let bill = 0;
    state.map((product, index) => {
      const { productID, productTitle, quantity, price } = product;
      bill = bill + quantity * price;
    });
    return bill;
  };

  const renderTableData = () => {
    return state.map((product, index) => {
      const { productID, productTitle, quantity, price } = product;
      return (
        <tr className="data">
          <td>{productID}</td>
          <td>{productTitle}</td>
          <td>{quantity}</td>
          <td>{price}</td>
          <td>{quantity * price}</td>
        </tr>
      );
    });
  };
  const [msg, setMsg] = useState([``]);

  async function sendData() {
    infoObject();
    const response = await fetch(
      "https://apnay-rung-api.herokuapp.com/order/new",
      {
        method: "POST",
        withCredentials: true,
        credentials: "include",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwibmFtZSI6IlZhZmEgQmF0b29sIiwidHlwZU9mVXNlciI6InNlbGxlciIsImlhdCI6MTYxNjg0NDE3N30.xYaUcX7dmdqY5co2tMbVA_9jh0M1fVBB-AX0Aam5G7Y",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          items: items,
          totalamount: total,
          delivery_status: "processing",
          name: customerInfo.name,
          email: customerInfo.email,
          phone: customerInfo.phone,
          billing_address: customerInfo.bill_address,
          shipping_address: customerInfo.ship_address,
          payment_method: customerInfo.payment
        })
      }
    );

    console.log(response);

    if (response.status === 201) {
      localStorage.removeItem("shoppingCart");
      localStorage.removeItem("customerInformation");
      setMsg([`You order has been placed.`, `Back to Home`]);
      handleShow();
    } else {
      setMsg([`You order could not be placed.Try again.`, `Back`]);
      handleShow();
    }
  }
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => setShow(true);
  return (
    <div>
      <CustomerNavbar />
      <Memory
        panel="Customer Panel "
        page="Shopping Cart / Checkout /"
        current=" Order Confirmation"
      />{" "}
      {/* when three links needed in panel, include a '/' in the middle 'page' argument */}
      <h1>Order Confirmation</h1>
      <h2>Order Details</h2>
      <div className="table-responsive">
        <table className="table table-size">
          <thead>
            <tr className="top-row">
              <th>Product ID</th>
              <th>Product Title</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>{renderTableData()}</tbody>
        </table>
      </div>
      <div className="totalBill">
        <br />
        Total: {renderBill()}
        <br />
      </div>
      <div className="shippingAddress">
        <h3>Shipping address</h3>
        {address}
      </div>
      <input
        type="submit"
        className="confirmOrder-button"
        value="Confirm Order"
      ></input>
      <BottomBar />
    </div>
  );
};
export default OrderConfirmation;
