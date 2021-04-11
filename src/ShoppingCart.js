import "./styles.css";
import "./momina.css";
import CustomerNavbar from "./CustomerNavbar";
import Memory from "./Memory";
import BottomBar from "./BottomBar";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { useState, useRef, useEffect } from "react";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
// import Modal from "react-bootstrap/Modal";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// const [qty, setQuantity] = useState(1);

const Counter = (props) => {
  const [qty, setQuantity] = useState(props.qty);
  const increment = async () => {
    setQuantity((qty) => qty + 1);
    props.costFunc(props.totalBill + props.price);

    let storage = await JSON.parse(localStorage.getItem("shoppingCart"));
    storage[props.ind].quantity = 1 + storage[props.ind].quantity;
    // console.log(storage[props.ind].quantity);
    localStorage.removeItem("shoppingCart");
    localStorage.setItem("shoppingCart", JSON.stringify(storage));
    props.stateFunc(storage);
  };
  const decrement = async () => {
    if (qty >1) {
      setQuantity((qty) => qty - 1);
      props.costFunc(props.totalBill - props.price);

      let storage = await JSON.parse(localStorage.getItem("shoppingCart"));
      storage[props.ind].quantity = storage[props.ind].quantity - 1;
      // console.log(storage[props.ind].quantity);
      localStorage.removeItem("shoppingCart");
      localStorage.setItem("shoppingCart", JSON.stringify(storage));
      props.stateFunc(storage);
    }
  };

  return (
    <div key={props.qty} class="quantity-box">
      <p id="qty">{qty}</p>
      <div class="increment-button">
        <button class="increment-button" onClick={increment}>
          {" "}
          <KeyboardArrowUpIcon
            style={{
              fontSize: "small"
            }}
          />{" "}
        </button>
        <button class="increment-button" onClick={decrement}>
          {" "}
          <KeyboardArrowDownIcon
            style={{
              fontSize: "small"
            }}
          />{" "}
        </button>
      </div>
    </div>
  );
};

const ShoppingCart = () => {
  const fromLocalStorage = JSON.parse(localStorage.getItem("shoppingCart"));
  const [state, setState] = useState(fromLocalStorage);
  const [total, setTotal] = useState(0);

  //The below block of code will give the initial total bill before any increments/decrements
  
  const getBill = () =>{
    let cost = 0;
    try {
      state.map((product, index) => {
        const { productID, productTitle, quantity, price } = product;
        cost = cost + quantity * price;
      });
    } catch {}
    // setTotal(cost)
    return cost
  }
  // getBill()

  // console.log(cost);

  const [show, setShow] = useState(false);
  const [indexDelete, setIndex] = useState(0);

  const handleClose = (isDelete) => {
    setShow(false);
    // console.log(indexDelete);
    if (isDelete) {
      let copyState = state.slice();
      // console.log(state);
      // console.log(copyState);
      copyState.splice(indexDelete, 1);
      // console.log(copyState);
      localStorage.removeItem("shoppingCart");
      localStorage.setItem("shoppingCart", JSON.stringify(copyState));
      setState(copyState);
    }
  };
  const handleShow = (index) => {
    // console.log(index);
    setIndex(index);
    setShow(true);
  };
  
  // const setTotal= useRef(0)

  const renderTableData = () => {
    try {
      return state.map((product, index) => {
        const { productID, productTitle, quantity, price, image } = product; //destructuring
        // console.log(quantity);
        let ind = index;

        return (
          <tr className="data">
            <td><img className="shoppingCart-image" src={image} alt="Logo" /></td>
            <td>{productTitle}</td>
            {/* <input className="text-center" type="number" min={quantity} /> */}
            <td>
              <Counter
                key={quantity}
                qty={quantity}
                costFunc={setTotal}
                totalBill={total}
                price={price}
                ind={ind}
                stateFunc={setState}
              />
            </td>
            <td>PKR {price}</td>
            <td>PKR {quantity * price}</td>
            <td>
              <a
                href="#top"
                to="/ShoppingCart"
                className="link"
                onClick={() => handleShow(ind)}
              >
                Delete
              </a>
            </td>
          </tr>
        );
      });
    } catch {
      return (
        <div>
          {/* CART IS EMPTY */}
          <Modal
            show={true}
            onHide={() => handleClose(false)}
            className="delete-modal"
          >
            <Modal.Header closeButton>
              <Modal.Title>Empty</Modal.Title>
            </Modal.Header>
            <Modal.Body>Shopping cart is empty</Modal.Body>
            <Modal.Footer>
              <Link to="/Catalog">
                <Button
                  variant="primary"
                  onClick={() => handleClose(false)}
                  className="delete-primary"
                >
                  Buy Products
                </Button>
              </Link>
            </Modal.Footer>
          </Modal>
        </div>
      );
    }
  };

  return (
    <div>
      <CustomerNavbar />
      <Memory panel="Customer Panel " page="" current=" Shopping Cart" />{" "}
      {/* when three links needed in panel, include a '/' in the middle 'page' argument */}
      <h1>Shopping Cart</h1>
      <div className="table-responsive">
        <table className="table table-size">
          <thead>
            <tr className="top-row">
              <th>Product</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Subtotal</th>
              <th>Delete Product</th>
            </tr>
          </thead>
          <tbody>{renderTableData()}</tbody>
        </table>
      </div>
      <div className="totalBill">Total: {getBill()}</div>
      <div className="outer">
        <div className="inner">
          <Link to="/Catalog">
            <input
              type="submit"
              className="continueShopping-button"
              value="Continue Shopping"
            ></input>
          </Link>
        </div>
        <div className="inner">
          <Link to="/Checkout">
            <input
              type="submit"
              className="checkout-button"
              value="Checkout"
            ></input>
          </Link>
        </div>
      </div>
      <BottomBar />
      <Modal
        show={show}
        onHide={() => handleClose(false)}
        className="delete-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this product?</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => handleClose(false)}
            className="delete-secondary"
          >
            Don't Delete
          </Button>
          <Button
            variant="primary"
            onClick={() => handleClose(true)}
            className="delete-primary"
          >
            Delete Product
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default ShoppingCart;
