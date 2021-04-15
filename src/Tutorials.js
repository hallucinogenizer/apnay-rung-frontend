import "./styles.css";
import AdminNavbar from "./AdminNavbar";
import Memory from "./Memory";
import BottomBar from "./BottomBar";
import AddBoxIcon from "@material-ui/icons/AddBox";

const Tutorials = () => {
  let state = {
    //state is by default an object
    tutorials: [
      {
        id: 1,
        title: "How to use Apnay Rung"
      },
      {
        id: 1,
        title: "How to use Apnay Rung"
      },
      {
        id: 1,
        title: "How to use Apnay Rung"
      },
      {
        id: 1,
        title: "How to use Apnay Rung"
      }
    ]
  };

  const renderTableData = () => {
    return state.tutorials.map((tutorial, index) => {
      const { id, title } = tutorial; //destructuring
      return (
        <tr className="data">
          <td>{id}</td>
          <td>{title}</td>
          <td>
            <a href="#delete" className="link">
              View
            </a>
            |
            <a href="#delete" className="link">
              Edit
            </a>
            |
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
      <Memory panel="Admin Panel " page="" current=" Tutorials" />{" "}
      {/* when three links needed in panel, include a '/' in the middle 'page' argument */}
      <h1>Tutorials</h1>
      <div className="table-responsive">
        <table className="table table-size">
          <thead>
            <tr className="top-row">
              <th>ID</th>
              <th>Title</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{renderTableData()}</tbody>
        </table>
        <ul>
          <a href="notifications.html" class="link tutorial">
            <AddBoxIcon />
            Create New Tutorial
          </a>
        </ul>
      </div>
      <BottomBar />
    </div>
  );
};
export default Tutorials;
