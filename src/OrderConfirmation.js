import "./styles.css";
import AdminNavbar from "./AdminNavbar";
import Memory from "./Memory";
import BottomBar from "./BottomBar";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { useState, useRef, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const OrderConfirmation = () => {
  const fromLocalStorage = JSON.parse(localStorage.getItem("shoppingCart"));
  const customerInfo = JSON.parse(localStorage.getItem("customerInformation"));
  const [state, setState] = useState(fromLocalStorage);
  let total = 0;
  let items = [];

  let address = customerInfo.ship_address;

  const infoObject = () => {
    fromLocalStorage.map((product, index) => {
      if (items.length === 0) {
        // console.log(items);
        let subtotal = product.quantity * product.price;
        items[0] = [product.productID, product.quantity, subtotal];
      } else {
        let subtotal = product.quantity * product.price;
        items.push([product.productID, product.quantity, subtotal]);
      }
    });
  };

  const renderBill = () => {
    let bill = 0;
    state.map((product, index) => {
      const { productID, productTitle, quantity, price } = product;
      bill = bill + quantity * price;
    });
    total = bill;
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
          shipping_address: customerInfo.ship_address
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
      <AdminNavbar />
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
        onClick={sendData}
      ></input>
      <BottomBar />
      <Modal show={show} onHide={handleClose} className="delete-modal">
        <Modal.Header closeButton>
          <Modal.Title>Order confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>{msg[0]}</Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            className="delete-primary"
            onClick={handleClose}
          >
            {msg[1] !== "Back" ? <Link to="./Homepage">{msg[1]}</Link> : msg[1]}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default OrderConfirmation;
