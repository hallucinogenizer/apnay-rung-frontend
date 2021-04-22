import "./styles.css";
import "./momina.css";
import SellerNavbar from "./SellerNavbar";
import Memory from "./Memory";
import BottomBar from "./BottomBar";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { useState, useRef, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';

const ViewCurrentOrders = () => {
  let tokenID = localStorage.getItem("Token");
  // tokenID= `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTcsIm5hbWUiOiJUYWltb29yIFRhcmlxIiwidHlwZU9mVXNlciI6ImN1c3RvbWVyIiwiaWF0IjoxNjE2OTYxNzMwfQ.Dn0FATITkhrR7e5tkp_XAmdPfp-FKJGzdskczt9k2fw`;
  let items = [];
  const [ind, setIndex] = useState(0)
  const [orderData, setOrderData]= useState([])
  const [id, setId]= useState(0)
  const [callEffect,setCallEffect]= useState(false)

  useEffect(() => {
    const getData = async (url) => {
      const response = await fetch(url, {
        method: "GET",
        withCredentials: true,
        credentials: "include",
        headers: {
          Authorization:
            `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwibmFtZSI6IlRhaW1vb3IgVGFyaXEiLCJ0eXBlT2ZVc2VyIjoic2VsbGVyIiwiaWF0IjoxNjE2OTUwMTgwfQ.5sLboKcaMf5D96MJUSxsv4lynZ9k-J0lQ5w_C40I_Bo`,
          "Content-Type": "application/json"
        }
      });
      return response.json();
    };

    const filterOrders= (response) => {
      let allOrders=[]
      response.map((order,index)=>{
        const {cancelled,order_status}= order
        if(cancelled===false){
          if(order_status===false){
            try{
              allOrders.push(order)
              // setState([...order])
            }
            catch{
              // setState([order])
              allOrders[0]=order
            }
          }
          else{
            console.log(`rejected order is ${order.order_id}`)
          }
        }
      })
  
      // console.log(`order is here`, allOrders)
      return allOrders
    }
 
    getData("https://apnay-rung-api.herokuapp.com/order/all").then(
    (response) => {
      console.log(`customer navbar response: ${response}`)
      const orders= filterOrders(response)
      setOrderData(orders);
      console.log(orderData)
    }
  );
  }, [callEffect]);

  

  // console.log(`hello length is`)
  // console.log(orderData.length)
  // console.log(orderData[0])


  const renderTableData = () => {
    try{
      let index= ind
      console.log(`index is now ${index}`)
      let order = orderData[index]
      return (order.items).map((product, index) => {
        // const product = obj.items;
        if(product[3]!=="Item Deleted"){
          return (
            <tr className="data">
              <td>{product[0]}</td>
              <td>{product[3]}</td>
              <td>{product[2]}</td>
              <td>{product[1]}</td>
              <td>{product[1] * product[2]}</td>
            </tr>
          );
        }
        else{
          return(
            <tr className="data">
            <td>This product is no longer available.</td> 
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        )
        }

      });
    }catch{}

  };

  const renderOrderData = () => {
    try{
      let index= ind
      let order = orderData[index]
      const { order_id, timestamp } = order;
      // setId(order_id)
      // console.log(`timestamp ${timestamp.parse()}`)
      return (
        <tr className="data">
          <td>Order ID: {order_id}</td>
          <td>Order Date: {timestamp}</td>
        </tr>
      );
    }catch{}

  }

  const getID = () => {
    try{
      let order= orderData[ind]
      return order.order_id
    }catch{}
  }

  const renderCustomerDetails = () => {
    try{
      let index= ind
      let order = orderData[index]
        return (
          <div>
            Name: {order.name}
            <br/>
            Address: {order.s_address}
            <br/>
            City: {order.city}
            <br/>
            Country: {order.country}
            <br/>
            Phone Number: {order.phone}
          </div>
          
        );
    }catch{}

    
  }

  const [msg, setMsg] = useState([``]);

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    if (msg[1] == `Back to Home`) {
      window.location.href = "/Homepage";
    }

  };

  const NextPage = () => {
    if(ind <= orderData.length-2){
      setIndex((prev)=> prev+1)
      console.log(`new index is ${ind}`)
    }
    
  }

  const PrevPage = () => {
    if(ind>0){
      setIndex((prev)=> prev-1)
    }
    
  }

  async function sendData(url) {
    // console.log(`token is  ${tokenID}`)

    const response = await fetch(
      `${url}`,
      {
        method: "PATCH",
        withCredentials: true,
        credentials: "include",
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwibmFtZSI6IlZhZmEgQmF0b29sIiwidHlwZU9mVXNlciI6InNlbGxlciIsImlhdCI6MTYxNjg0NDE3N30.xYaUcX7dmdqY5co2tMbVA_9jh0M1fVBB-AX0Aam5G7Y`,
          "Content-Type": "application/json"
        }
      }
    );

    console.log(response);

    if (response.status === 200) {
      setCallEffect(!callEffect)
      setMsg([`Request has been processed.`, `Back`]);
      handleShow();
    } else {
      setMsg([`Your request could not be processed.Try again.`, `Back`]);
      handleShow();
    }
  }

  const handleShow = () => setShow(true);
  return (
    <div>
      <SellerNavbar />
      <Memory
        panel="Seller Panel "
        page=""
        current=" Current Orders"
      />{" "}
      {/* when three links needed in panel, include a '/' in the middle 'page' argument */}
      <h1>Current Orders</h1>
      <h2>Order Summary</h2>
      <div>
        <div>
          <div className="table-responsive">
            <table className="table table-size-currentOrders">
              <thead>{renderOrderData()}</thead>
            </table>
            <table className="table table-size-currentOrders1">
              <thead>
                <tr className="top-row">
                  <th>Product ID</th>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total Price</th>
                </tr>
              </thead>
              <tbody>{renderTableData()}</tbody>
            </table>
          </div>
          <div className="checkout-buttons">
              <button
                className="submit-button-cancel"
                onClick={()=>sendData(`https://apnay-rung-api.herokuapp.com/order/cancel/${getID()}`)}
              ><ClearIcon/> Cancel Order</button>
              <button
                className="submit-button-confirm"
                onClick={()=>sendData(`https://apnay-rung-api.herokuapp.com/order/confirm/${getID()}`)}
              ><DoneIcon /> Confirm Order</button>
          </div>
        </div>
        <div className="customer-details">
          <h3>Customer Details</h3>
          {renderCustomerDetails()}
        </div>
      </div>
      <button className="page-navigating" onClick={()=> NextPage()}>Next Page</button>
      <button className="page-navigating" onClick={PrevPage}>Previous Page</button>

      <br />
      <br />
      <br />
      <br />
      <br />
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
export default ViewCurrentOrders;
