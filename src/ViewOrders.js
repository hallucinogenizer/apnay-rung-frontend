import "./styles.css";
import AdminNavbar from "./AdminNavbar";
import Memory from "./Memory";
import BottomBar from "./BottomBar";
import { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";


const ViewOrders = () => {

  const [state, setState] = useState([
    {
      order_id: 0,
      customer_id: 0,
      items: [],
      timestamp: ""
    }
  ]);

  useEffect(() => {
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

    getData("http://apnay-rung-api.herokuapp.com/order/all ").then(
      (response) => {
        console.log(response);
        setState(response);
      }
    );
  }, []);

  const getItemID= (items) => {
      return items.map((item, index)=> {

        return(
          <tr className="item-array">
            <td>{item[0]}</td>
          </tr>
        )

      })
  }
  const getItemTitle= (items) => {
    return items.map((item, index)=> {
      return(
        <tr className="item-array">
          <td>{item[3]}</td>
        </tr>
      )
    })
  }

  const getTotal= (items) => {
    let total = 0
    items.map((item, index)=> {
      total= total + (item[1])*(item[2])
    })
    return total
  }

  const renderTableData = () => {
    return state.map((order, index) => {
      const {
        order_id,
        customer_id,
        items,
        timestamp
      } = order; //destructuring

      let date= (timestamp.split(" "))[0]
      // console.log(order_id)
      // console.log(`items ${items}`)
      return (
        <tr class="data">
          <td>{order_id}</td>
          <td>{customer_id}</td>
          <td>{getItemID(items)}</td>
          <td>{getItemTitle(items)}</td>
          <td>{date}</td>
          <td>PKR {getTotal(items)}</td>
        </tr>
      );
    });
  };

  return (
    <div>
      <AdminNavbar />
      <Memory panel="Admin Panel " page="" current=" View Orders" />{" "}
      {/* when three links needed in panel, include a '/' in the middle 'page' argument */}
      <h1>View All Orders </h1>
      <div class="table-responsive">
        <table class="table table-size">
          <thead>
            <tr class="top-row">
              <th className="remove-wrapping">Order ID</th>
              <th className="remove-wrapping">Customer ID</th>
              <th className="remove-wrapping">Product ID</th>
              <th className="remove-wrapping">Item Title</th>
              <th className="remove-wrapping">Date Placed</th>
              <th className="remove-wrapping">Total Amount</th>
            </tr>
          </thead>
          <tbody>{renderTableData()}</tbody>
        </table>
      </div>
      <BottomBar />
    </div>
  );
};

export default ViewOrders;
