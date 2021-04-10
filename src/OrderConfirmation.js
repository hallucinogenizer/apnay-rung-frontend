import "./styles.css";
import AdminNavbar from "./AdminNavbar";
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
      ></input>
      <BottomBar />
    </div>
  );
};
export default OrderConfirmation;
