import "./styles.css";
import React, { useState } from "react";
import CustomerNavbar from "./CustomerNavbar";
import Memory from "./Memory";
import BottomBar from "./BottomBar";
import { Link } from "react-router-dom";

const Checkout = () => {
  let initialValue = {
    name: "Rohan",
    email: "rohan1.gmail.com",
    phone: "032245675",
    ship_address: "Street 2, House 3, Mars, Milky Way",
    bill_address: "",
    additional_info: "",
    payment: ""
  };
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    ship_address: "",
    bill_address: "",
    additional_info: "",
    payment: ""
  });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [ship_address, setShipAddress] = useState("");
  const [bill_address, setBillAddress] = useState("");
  const [additional_info, setAdditionalInfo] = useState("");
  const [payment, setPayment] = useState("");

  const SubmitHandler = () => {
    console.log(`submitted form`);
    setState({
      name: name,
      email: email,
      phone: phone,
      ship_address: ship_address,
      bill_address: bill_address,
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
  const BillingAddressChangeHandler = (event, same_address) => {
    console.log(`in change handler `);
    if (same_address === true) {
      setBillAddress(ship_address);
    } else {
      try {
        setBillAddress(event.target.value);
      } catch {
        console.log("error");
      }
    }
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
      <Memory panel="Customer Panel " page="" current=" Checkout" />{" "}
      <h1>Checkout</h1>
      <form className="form-product" onSubmit={SubmitHandler}>
        <p className="label-form"> Customer Name </p>
        <input
          className="input-form"
          type="text"
          name="name"
          value={initialValue.name}
          onChange={NameChangeHandler}
        ></input>
        <p className="label-form"> Customer Email Address </p>
        <input
          className="input-form"
          type="text"
          name="email"
          value={initialValue.email}
          onChange={EmailChangeHandler}
        ></input>
        <p className="label-form"> Customer Phone Number </p>
        <input
          className="input-form"
          type="text"
          name="phone"
          value={initialValue.phone}
          onChange={PhoneChangeHandler}
        ></input>
        <p className="label-form">Shipping Address</p>
        <input
          className="input-form"
          type="text"
          name="ship_address"
          value={initialValue.ship_address}
          onChange={ShippingChangeHandler}
        ></input>
        <p className="label-form">Billing Address</p>
        <label>
          <input
            className="checkbox-form"
            type="checkbox"
            name="check-billing"
            onClick={() => BillingAddressChangeHandler(true)}
          ></input>
          Same as Shipping Address
        </label>
        <input
          className="input-form"
          type="text"
          name="bill_address"
          onChange={() => BillingAddressChangeHandler(false)}
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
        {/* <input
          className="input-des"
          type="text"
          name="additional_info"
          placeholder="e.g. Please send in blue color"
          onChange={InfoChangeHandler}
        ></input> */}
        <p className="label-form">Payment Method</p>
        <label>
          <input
            className="radio-label"
            type="radio"
            name="payment"
            value="Cash on Delivery"
            onClick={PaymentChangeHandler}
          ></input>
          Cash on Delivery
        </label>
        <br />
        <label>
          <input
            className="radio-label"
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
        <input
          type="submit"
          className="submit-button2"
          value="Return to Cart"
        ></input>
        <input
          type="submit"
          className="submit-button3"
          value="Confirm Order"
        ></input>
      </form>
      <br />
      <br />
      <br />
      <BottomBar />
    </div>
  );
};
export default Checkout;
