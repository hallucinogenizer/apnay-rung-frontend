import "./styles.css";
import AdminNavbar from "./AdminNavbar";
import Memory from "./Memory";
import BottomBar from "./BottomBar";
import {useState,useEffect} from 'react';
import FormPopup from './FormPopup';

const QueryForms = () => {
  // let state = {
  //   //state is by default an object
  //   customers: [
  //     {
  //       id: 1,
  //       name: "Wasif",
  //       email: "wasif@email.com",
  //       message: "Hello, you website rocks. How did you Make it?"
  //     },
  //     {
  //       id: 2,
  //       name: "Wasif",
  //       email: "wasif@email.com",
  //       message: "Hello, you website rocks. How did you Make it?"
  //     },
  //     {
  //       id: 3,
  //       name: "Wasif",
  //       email: "wasif@email.com",
  //       message: "Hello, you website rocks. How did you Make it?"
  //     },
  //     {
  //       id: 4,
  //       name: "Wasif",
  //       email: "wasif@email.com",
  //       message: "Hello, you website rocks. How did you Make it?"
  //     }
  //   ]
  // };
  const [viewForm, setViewForm] = useState(false)
  const [state, setState] = useState([
    {
      message_id: 0,
      subject: "",
      content: "",
      customer_id: 0,
      timestamp: ""
    }
  ]);


  useEffect(() => {
    const getData = async (url) => {
      const response = await fetch(url, {
        method: "GET",
        withCredentials: true,
        credentials: "include",
        headers: {
          Authorization:
          `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ik11aGFtbWFkIFJvaGFuIEh1c3NhaW4iLCJ0eXBlT2ZVc2VyIjoiYWRtaW4iLCJpYXQiOjE2MTY4NDE4MTZ9.HJvh_8caLMReaDmJFCEklgtP9u86usbNIZ4FxOrIawk`,
          "Content-Type": "application/json"
        }
      });
      return response.json();
    };
    getData("https://apnay-rung-api.herokuapp.com/message/all").then(
    (response) => {
      console.log(`printing response`, response)
      setState(response)
    }
  );
  }, []);

  const handleSetViewForm = () => setViewForm(true);

  const handleViewForm =(id,customer_id, subject,content) => {
    const temp = 
    {
      formID:id,
      customerID: customer_id, 
      subject: subject, 
      content: content 
    }
    localStorage.setItem("form-content", JSON.stringify(temp));
    handleSetViewForm();
  }



  const renderTableData = () => {
    return state.map((form, index) => {
      const { id, subject, content,customer_id, timestamp} = form; //destructuring
      let time = timestamp.split(':')
      time = time[0]

      return (
        <tr className="data">
          <td>{customer_id}</td>
          <td>{id}</td>
          <td>{subject}</td>
          <td>{time}</td>
          <td>
            <span>
          <button className="view-btn" onClick={() => handleViewForm(id,customer_id, subject,content)}>
              View
            </button>
            <p>|</p>
            <a href="#delete" className="link">
               Delete
            </a>
            </span>
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
              <th>Customer ID</th>
              <th>Message ID</th>
              <th>Subject</th>
              <th>Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{renderTableData()}</tbody>
        </table>
      </div>
      <FormPopup trigger={viewForm} setTrigger={setViewForm}>
          </FormPopup>
      <BottomBar />
    </div>
  );
};
export default QueryForms;
