import "./styles.css";
import { useState, useEffect } from "react";
import AdminNavbar from "./SellerNavbar";
import Memory from "./Memory";
import BottomBar from "./BottomBar";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

const Tutorials = () =>{
  const [state, setState] = useState([
    {
      id: "",
      title: "",
    }
  ]);
  const [callEffect,setCallEffect]= useState(false);
  useEffect(() => {
    async function getData(url) {
      const response = await fetch(url, {
        method: "GET",
        withCredentials: true,
        credentials: "include",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwibmFtZSI6IlZhZmEgQmF0b29sIiwidHlwZU9mVXNlciI6InNlbGxlciIsImlhdCI6MTYxNjg0NDE3N30.xYaUcX7dmdqY5co2tMbVA_9jh0M1fVBB-AX0Aam5G7Y",
          "Content-Type": "application/json"
        }
      });

      return response.json();
    }

    getData("https://apnay-rung-api.herokuapp.com/tutorial/all").then(
      (response) => {
        console.log(response);
        setState(response);
      }
    );
  },[callEffect]);

  const updateTutorial= (tutorial) => {
    localStorage.removeItem("update_tutorial");
    localStorage.setItem("update_tutorial", JSON.stringify(tutorial));
  }

  async function deleteTutorial(tutorialID){
    const response = await fetch(
      `https://apnay-rung-api.herokuapp.com/tutorial/id/${tutorialID}`,
      {
        method: "DELETE",
        withCredentials: true,
        credentials: "include",
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ik11aGFtbWFkIFJvaGFuIEh1c3NhaW4iLCJ0eXBlT2ZVc2VyIjoiYWRtaW4iLCJpYXQiOjE2MTY4NDE4MTZ9.HJvh_8caLMReaDmJFCEklgtP9u86usbNIZ4FxOrIawk`,
          "Content-Type": "application/json"
        }
      }
    );
    console.log(response);

    if (response.status === 200 || response.status === 201 || response.status === 202) {
      
      console.log(`processed ${!callEffect}`)
      setCallEffect(!callEffect)
    } 
  }

  const [show, setShow] = useState(false);
  const [id, setID] = useState(0);

  const handleShow = (itemID) => {
    setID(itemID)
    setShow(true)
    
  };
  const handleClose = (changeBlock) => {
    setShow(false);
    if(changeBlock === true){
      console.log(`sending to backend`)
      deleteTutorial(id)
    }
    
  };

  const renderTableData = () => {
    return state.map((tutorial, index) => {
      const { tutorial_id, title } = tutorial; //destructuring
      return (
        <tr className="data">
          <td>{tutorial_id}</td>
          <td>{title}</td>
          <td>
            <Link to="/UpdateTutorial" className="route" onClick={() => updateTutorial(tutorial)}>
            <button className="link-v2">
              Update
            </button>
            </Link>
            |
            <button className="link-v2" onClick={()=>handleShow(tutorial_id)}>
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };

  return (
    <div>
      <AdminNavbar />
      <Memory panel="Admin Panel" page="Panel" current="Tutorials" />
      <h1>View All Tutorials </h1>
      <div className="table-responsive">
        <table className="table table-size">
          <thead>
            <tr className="top-row">
              <th>Tutorial ID</th>
              <th>Title</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{renderTableData()}</tbody>
        </table>
      </div>
      <BottomBar />
      <Modal show={show} onHide={handleClose} className="delete-modal">
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this tutorial?</Modal.Body>
        <Modal.Footer>
        <Button
            variant="secondary"
            className="delete-secondary"
            onClick={()=>handleClose(false)}
          >
            Don't Delete
          </Button>
          <Button
            variant="primary"
            className="delete-primary"
            onClick={()=>handleClose(true)}
          >
            Delete Product
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default Tutorials;