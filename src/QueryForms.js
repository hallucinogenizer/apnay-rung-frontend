import "./styles.css";
import AdminNavbar from "./AdminNavbar";
import Memory from "./Memory";
import BottomBar from "./BottomBar";

const QueryForms = () => {
  let state = {
    //state is by default an object
    customers: [
      {
        id: 1,
        name: "Wasif",
        email: "wasif@email.com",
        message: "Hello, you website rocks. How did you Make it?"
      },
      {
        id: 2,
        name: "Wasif",
        email: "wasif@email.com",
        message: "Hello, you website rocks. How did you Make it?"
      },
      {
        id: 3,
        name: "Wasif",
        email: "wasif@email.com",
        message: "Hello, you website rocks. How did you Make it?"
      },
      {
        id: 4,
        name: "Wasif",
        email: "wasif@email.com",
        message: "Hello, you website rocks. How did you Make it?"
      }
    ]
  };

  const renderTableData = () => {
    return state.customers.map((customer, index) => {
      const { id, name, email, message } = customer; //destructuring
      return (
        <tr className="data">
          <td>{id}</td>
          <td>{name}</td>
          <td>{email}</td>
          <td>{message}</td>
          <td>
            <a href="#delete" className="link">
              Delete
            </a>
          </td>
        </tr>
      );
    });
  };

  return (
    <div>
      <AdminNavbar />
      <Memory panel="Admin Panel " page="" current=" Query Forms" />{" "}
      {/* when three links needed in panel, include a '/' in the middle 'page' argument */}
      <h1>Query Forms </h1>
      <div className="table-responsive">
        <table className="table table-size">
          <thead>
            <tr className="top-row">
              <th>Sender ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
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
export default QueryForms;
