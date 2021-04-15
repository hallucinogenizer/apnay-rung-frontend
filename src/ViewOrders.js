import "./styles.css";
import AdminNavbar from "./AdminNavbar";
import Memory from "./Memory";
import BottomBar from "./BottomBar";

const ViewOrders = () => {
  let state = {
    //state is by default an object
    orders: [
      {
        orderID: "1",
        customerID: "1",
        customerName: "Wasif",
        productID: "00199",
        itemTitle: "Clay Pot",
        datePlaced: "10-May-2020",
        totalAmount: "200"
      },
      {
        orderID: "1",
        customerID: "1",
        customerName: "Wasif",
        productID: "00199",
        itemTitle: "Clay Pot",
        datePlaced: "10-May-2020",
        totalAmount: "200"
      },
      {
        orderID: "1",
        customerID: "1",
        customerName: "Wasif",
        productID: "00199",
        itemTitle: "Clay Pot",
        datePlaced: "10-May-2020",
        totalAmount: "200"
      },
      {
        orderID: "1",
        customerID: "1",
        customerName: "Wasif",
        productID: "00199",
        itemTitle: "Clay Pot",
        datePlaced: "10-May-2020",
        totalAmount: "200"
      }
    ]
  };

  const renderTableData = () => {
    return state.orders.map((order, index) => {
      const {
        orderID,
        customerID,
        customerName,
        productID,
        itemTitle,
        datePlaced,
        totalAmount
      } = order; //destructuring
      return (
        <tr class="data">
          <td>{orderID}</td>
          <td>{customerID}</td>
          <td>{productID}</td>
          <td>{itemTitle}</td>
          <td>{datePlaced}</td>
          <td>PKR {totalAmount}</td>
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
              <th>Order ID</th>
              <th>Customer ID</th>
              <th>Product ID</th>
              <th>Item Title</th>
              <th>Date Placed</th>
              <th>Total Amount</th>
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
