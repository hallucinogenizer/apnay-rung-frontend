import "./styles.css";
import "./maham.css";
import React, { useState } from "react";
import CustomerNavbar from "./CustomerNavbar";
import Memory from "./Memory";
import BottomBar from "./BottomBar";
import { Link } from "react-router-dom";

const NewCheckout = () => {
  const [initialValue, setInitialValue] = useState([]);
  // let initialValue = {
  //   name: "Rohan",
  //   email: "rohan1@gmail.com",
  //   phone: "032245675",
  //   ship_address: "Street 2, House 3, Mars, Milky Way",
  //   bill_address: "",
  //   additional_info: "",
  //   payment: ""
  // };
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    ship_address: "",
    bill_address: "",
    additional_info: "",
    payment: ""
  });

  const getData = async (url) => {
    const response = await fetch(url, {
      method: "GET",
      withCredentials: true,
      credentials: "include",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTcsIm5hbWUiOiJUYWltb29yIFRhcmlxIiwidHlwZU9mVXNlciI6ImN1c3RvbWVyIiwiaWF0IjoxNjE2OTYxNzMwfQ.Dn0FATITkhrR7e5tkp_XAmdPfp-FKJGzdskczt9k2fw",
        "Content-Type": "application/json"
      }
    });
    return response.json();
  };

  getData("https://apnay-rung-api.herokuapp.com/customer/info").then(
    (response) => {
      setInitialValue(response);
      console.log("intiil value", initialValue);
    }
  );
  const [name, setName] = useState(initialValue.name);
  const [email, setEmail] = useState(initialValue.email);
  const [phone, setPhone] = useState(initialValue.phone);
  const [ship_address, setShipAddress] = useState(initialValue.address);
  const [bill_address, setBillAddress] = useState("");
  const [additional_info, setAdditionalInfo] = useState("");
  const [payment, setPayment] = useState("");
  const SubmitHandler = (event) => {
    event.preventDefault();
    localStorage.setItem("customerInformation", JSON.stringify(state));

    console.log(`submitted form`);
    setState({
      name: name,
      email: email,
      phone: phone,
      shipping_address: ship_address,
      billing_address: bill_address,
      additional_info: additional_info,
      payment: payment
    });
    console.log(state);
    //send 'state'to backend
  };
  const NameChangeHandler = (event) => {
    console.log(
      `in change handler ${event.target.name}, ${event.target.value}`
    );
    setName(event.target.value);
  };
  const EmailChangeHandler = (event) => {
    console.log(
      `in change handler ${event.target.name}, ${event.target.value}`
    );
    setEmail(event.target.value);
  };
  const PhoneChangeHandler = (event) => {
    console.log(
      `in change handler ${event.target.name}, ${event.target.value}`
    );
    setPhone(event.target.value);
  };
  const ShippingChangeHandler = (event) => {
    console.log(
      `in change handler ${event.target.name}, ${event.target.value}`
    );
    setShipAddress(event.target.value);
  };
  const BillingAddressChangeHandler = (event) => {
    setBillAddress(ship_address);
  };
  const BillingAddressAdd = (event) => {
    setBillAddress(event.target.value);
  };
  const InfoChangeHandler = (event) => {
    console.log(
      `in change handler ${event.target.name}, ${event.target.value}`
    );
    setAdditionalInfo(event.target.value);
  };
  const PaymentChangeHandler = (event) => {
    console.log(`in change handler, ${event.target.value}`);
    setPayment(event.target.value);
  };
  return (
    <div className="CheckoutForm">
      <CustomerNavbar />
      <Memory
        panel="Customer Panel "
        page="Shopping Cart"
        current=" Checkout"
      />{" "}
      <h1>Checkout</h1>
      <form className="form-product" onSubmit={SubmitHandler}>
        <p className="label-form"> Customer Name </p>
        <input
          className="input-form"
          type="text"
          name="name"
          value={name}
          // value={initialValue.name}
          onChange={NameChangeHandler}
        ></input>
        <p className="label-form"> Customer Email Address </p>
        <input
          className="input-form"
          type="email"
          name="email"
          value={email}
          onChange={EmailChangeHandler}
        ></input>
        <p className="label-form"> Customer Phone Number </p>
        <input
          className="input-form"
          type="text"
          name="phone"
          value={phone}
          onChange={PhoneChangeHandler}
        ></input>
        <p className="label-form">Shipping Address</p>
        <input
          className="input-form"
          type="text"
          name="ship_address"
          value={ship_address}
          onChange={ShippingChangeHandler}
        ></input>
        <p className="label-form">Billing Address</p>
        <label className="checkbox-form-new">
          <input
            // className="checkbox-form"
            type="checkbox"
            name="check-billing"
            onClick={BillingAddressChangeHandler}
          ></input>
          Same as Shipping Address
        </label>
        <input
          className="input-form"
          type="text"
          name="bill_address"
          onChange={BillingAddressAdd}
        ></input>
        <p className="label-form">Additional Information</p>
        <textarea
          className="input-des"
          type="text"
          name="additional_info"
          placeholder="e.g. Please send in blue color"
          onChange={InfoChangeHandler}
          rows="4"
          cols="50"
        ></textarea>
        <p className="label-form">Payment Method</p>
        <label className="checkbox-form-new">
          <input
            // className="radio-label"
            type="radio"
            name="payment"
            value="Cash on Delivery"
            onClick={PaymentChangeHandler}
          ></input>
          Cash on Delivery
        </label>
        <br />
        <label className="checkbox-form-new">
          <input
            // className="radio-label"
            type="radio"
            name="payment"
            value="Bank Transfer"
            onClick={PaymentChangeHandler}
          ></input>
          Bank Transfer
        </label>
        <p className="label-form-box">
          {" "}
          Please send the Bill Amount to our Bank Account and send the receipt
          to us by mail or by WhatsApp to confirm your order.
          <br /> IBAN: PK48HABB12345678910
        </p>{" "}
        <br />
        <Link to="/ShoppingCart">
          <input
            type="submit"
            className="submit-button2"
            value="Return to Cart"
          ></input>
        </Link>
        <Link to="/OrderConfirmation">
          <input
            type="submit"
            className="submit-button3"
            value="Confirm Order"
            // onClick={SubmitHandler}
          ></input>
        </Link>
      </form>
      <br />
      <br />
      <br />
      <BottomBar />
    </div>
  );
};
export default NewCheckout;
