import "./styles.css";
import AdminNavbar from "./AdminNavbar";
import Memory from "./Memory";
import BottomBar from "./BottomBar";

const ApproveSellers = () => {
  let state = {
    //state is by default an object
    sellers: [
      {
        id: 1,
        name: "Wasif",
        email: "wasif@email.com",
        location: "Sindh",
        cnic: "1234567"
      },
      {
        id: 1,
        name: "Wasif",
        email: "wasif@email.com",
        location: "Sindh",
        cnic: "1234567"
      },
      {
        id: 1,
        name: "Wasif",
        email: "wasif@email.com",
        location: "Sindh",
        cnic: "1234567"
      },
      {
        id: 1,
        name: "Wasif",
        email: "wasif@email.com",
        location: "Sindh",
        cnic: "1234567"
      }
    ]
  };

  const renderTableData = () => {
    return state.sellers.map((seller, index) => {
      const { id, name, email, location, cnic } = seller; //destructuring
      //hello im here
      return (
        <tr className="data">
          <td>{id}</td>
          <td>{name}</td>
          <td>{email}</td>
          <td>{location}</td>
          <td>{cnic}</td>
          <td>
            <a href="#delete" className="link">
              View Image
            </a>
          </td>
          <td>
            <a href="#delete" className="link">
              Approve
            </a>
            |
            <a href="#delete" className="link">
              Reject
            </a>
          </td>
        </tr>
      );
    });
  };

  return (
    <div>
      <AdminNavbar />
      <Memory panel="Admin Panel " page="" current=" Approve Sellers" />{" "}
      {/* when three links needed in panel, include a '/' in the middle 'page' argument */}
      <h1>Approve Sellers</h1>
      <div className="table-responsive">
        <table className="table table-size">
          <thead>
            <tr className="top-row">
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Location</th>
              <th>CNIC</th>
              <th>CNIC Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{renderTableData()}</tbody>
        </table>
      </div>
      <BottomBar />
    </div>
  );
};
export default ApproveSellers;
