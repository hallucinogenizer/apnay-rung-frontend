import "./styles.css";
import AdminNavbar from "./AdminNavbar";
import Memory from "./Memory";
import BottomBar from "./BottomBar";
import AddBoxIcon from "@material-ui/icons/AddBox";

const ViewAllProducts = () => {
  let state = {
    //state is by default an object
    products: [
      {
        productID: "00199",
        productTitle: "Clay Pot",
        sellerID: "1",
        sellerName: "Wasif",
        category: "Pots",
        price: "200"
      },
      {
        productID: "00199",
        productTitle: "Clay Pot",
        sellerID: "1",
        sellerName: "Wasif",
        category: "Pots",
        price: "200"
      },
      {
        productID: "00199",
        productTitle: "Clay Pot",
        sellerID: "1",
        sellerName: "Wasif",
        category: "Pots",
        price: "200"
      },
      {
        productID: "00199",
        productTitle: "Clay Pot",
        sellerID: "1",
        sellerName: "Wasif",
        category: "Pots",
        price: "200"
      }
    ]
  };

  const renderTableData = () => {
    return state.products.map((product, index) => {
      const {
        productID,
        productTitle,
        sellerID,
        sellerName,
        category,
        price
      } = product; //destructuring
      return (
        <tr className="data">
          <td>{productID}</td>
          <td>{productTitle}</td>
          <td>{sellerID}</td>
          <td>{sellerName}</td>
          <td>{category}</td>
          <td>{price}</td>
          <td>
            <a href="#delete" className="link">
              Maked Featured
            </a>
          </td>
        </tr>
      );
    });
  };

  return (
    <div>
      <AdminNavbar />
      <Memory panel="Admin Panel " page="" current=" View All Products" />{" "}
      {/* when three links needed in panel, include a '/' in the middle 'page' argument */}
      <h1>View All Products</h1>
      <div className="table-responsive">
        <table className="table table-size">
          <thead>
            <tr className="top-row">
              <th>Product ID</th>
              <th>Product Title</th>
              <th>Seller ID</th>
              <th>Seller Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{renderTableData()}</tbody>
        </table>
      </div>
      <BottomBar />
    </div>
  );
};
export default ViewAllProducts;
