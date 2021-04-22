import "./styles.css";
import "./momina.css";
import "./maham.css";
import CustomerNavbar from "./CustomerNavbar";
import Memory from "./Memory";
import BottomBar from "./BottomBar";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { useState, useRef, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const Star = ({ starId, rating, onMouseEnter, onMouseLeave, onClick }) => {
  let styleClass = "star-rating-blank";
  if (rating && rating >= starId) {
    styleClass = "star-rating-filled";
  }

  return (
    <div
      className="star"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <svg
        height="20px"
        width="20px"
        class={styleClass}
        viewBox="0 0 20 20"
        data-rating="1"
      >
        <polygon
          stroke-width="0"
          points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
        />
      </svg>
    </div>
  );
};

const AddReview = () => {
  const [state, setState] = useState([]);
  let tokenID = localStorage.getItem("Token");
  const [callEffect,setCallEffect]= useState(false)
  // tokenID= `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTcsIm5hbWUiOiJUYWltb29yIFRhcmlxIiwidHlwZU9mVXNlciI6ImN1c3RvbWVyIiwiaWF0IjoxNjE2OTYxNzMwfQ.Dn0FATITkhrR7e5tkp_XAmdPfp-FKJGzdskczt9k2fw`;
  const [ind, setIndex] = useState(0)
  const [reviewText, setReviewText] = useState("")
  let id=0
  let itemLength=0

  useEffect(() => {
    const getData = async (url) => {
      const response = await fetch(url, {
        method: "GET",
        withCredentials: true,
        credentials: "include",
        headers: {
          Authorization:
            `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTcsIm5hbWUiOiJUYWltb29yIFRhcmlxIiwidHlwZU9mVXNlciI6ImN1c3RvbWVyIiwiaWF0IjoxNjE2OTUwOTY3fQ.3EzhjAnpyXPcaAcSLWSDuS-XVOJmY-k2fzVthKnm4AA`,
          "Content-Type": "application/json"
        }
      });
      return response.json();
    };

    const filterOrders= (response) => {
      let allOrders=[]
      response.map((order,index)=>{
        const {cancelled,review}= order
        if(review.length===0){
          try{
            allOrders.push(order)
          }
          catch{
            allOrders[0]=order
          }
        }
      })
      return allOrders
    }
 
    getData("https://apnay-rung-api.herokuapp.com/order/all").then(
    (response) => {
      console.log(`customer navbar response: ${response}`)
      const orders= filterOrders(response)
      setState(orders);
      console.log(state)
    }
  );
  }, [callEffect]);

  const NextPage = () => {
    if(ind <= state.length-2){
      setIndex((prev)=> prev+1)
      // setID((state[ind]).order_id)
    }
  }

  const PrevPage = () => {
    if(ind>0){
      setIndex((prev)=> prev-1)
      // setID((state[ind]).order_id)
    }
    
  }

  const getID = () => {
    try{
      let order= state[ind]
      return order.order_id
    }catch{}
  }

  const getItemLength = () => {
    try{
      let order= state[ind]
      return (order.items).length
    }catch{}
  }

  let allProducts=[] //this array will store all items, their ratings and reviews to send to backend
  let temp=[]

  const isPresent= (product) => {

    console.log(`items length is ${allProducts.length}`)
    for(let i=0; i< allProducts.length; i++){
      let oneItem= allProducts[i]
      console.log(`ispresent ${oneItem}`)
      if(oneItem[0]===product)
      {
        console.log(i)
        return i
      }
    }
    return null
  } //if item is already present

  const ratingChanged = (newRating,itemIndex) => {
    console.log(`rating ${newRating}`);
    let order= state[ind]

    let item= (order.items)[itemIndex]
    try{
      let isTrue=isPresent(item[0])
      // let isTrue=null
      if(isTrue===null){ //the item is being added for the first time
        // items.push([1,item[0],newRating,`review`])
        allProducts.push([item[0],newRating,reviewText])
        // temp= temp+1
      }
      else{
        temp= allProducts[isTrue]
        temp[1]=newRating
        console.log(`ratigntemp is now ${temp}`)
        allProducts[isTrue]=temp
      }


    }catch{
    }
    
    console.log(`items after rating ${allProducts}`)
  };


  const reviewChangeHandler = (event,itemIndex) =>{
    console.log(`checking items first ${allProducts}`)
    let text= event.target.value
    setReviewText(event.target.value)
    console.log(`checking items ${allProducts}`)
    console.log(`review handler is ${reviewText}`)
    
    let order= state[ind]

    let item= (order.items)[itemIndex]
    try{
      let isTrue=isPresent(item[0])
      console.log(`item id is ${item[0]}`)
      if(isTrue===null){
        console.log(`in null`)
        allProducts.push([item[0],0,text])
      }
      else{
        temp= allProducts[isTrue]
        
        temp[2]= text

        console.log(`review temp is now ${temp}`)
        allProducts[isTrue]=temp
      }


    }catch{
    }
    console.log(`items after review ${allProducts}`)
  }

  const renderTableData = () => {
    try{
      let order = state[ind]
      // console.log(`id is ${order.order_id}`)
      id= order.order_id
      return (order.items).map((product, index) => {
        if(product[3]!=="Item Deleted"){
          return (
            <tr className="data">
              <td><img className="shoppingCart-image" src={product[4]} alt="Logo" /></td>
              <td>{product[3]}</td>
              <td>  
                <ReactStars
                count={5}
                onChange={(value)=>ratingChanged(value,index)}
                size={24}
                activeColor="#d67d20"
                key={ind}
                />
              </td>
              <td>
                <form className="form-product">
                <input
                  key={ind}
                  className="input-form"
                  type="text"
                  name="review"
                  placeholder="e.g. good"
                  onChange={(event)=>reviewChangeHandler(event,index)}
                ></input>
  
                </form>
              </td>
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
            </tr>
          )
        }

      });
    }catch{}
  };

  const [msg, setMsg] = useState([``]);

  async function sendData() {
    console.log(`token is  ${tokenID}`)
    console.log(allProducts)
    let order = state[ind]
    console.log(`order id of sending data is `,order.order_id)

    const response = await fetch(
      "https://apnay-rung-api.herokuapp.com/order/review/new",
      {
        method: "PATCH",
        withCredentials: true,
        credentials: "include",
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTcsIm5hbWUiOiJUYWltb29yIFRhcmlxIiwidHlwZU9mVXNlciI6ImN1c3RvbWVyIiwiaWF0IjoxNjE2OTYxNzMwfQ.Dn0FATITkhrR7e5tkp_XAmdPfp-FKJGzdskczt9k2fw`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "order_id": order.order_id,
          "review": allProducts
        })
      }
    );

    console.log(response);

    if (response.status === 201 || response.status === 200) {
      
      setMsg([`Your review has been placed.`, `Back`]);
      handleShow();
      console.log(`processed ${!callEffect}`)
      setCallEffect(!callEffect)
      NextPage();
    } else {
      setMsg([`Your review could not be placed.Try again.`, `Back`]);
      handleShow();
    }
  }
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    if(msg[1]==`Back to Panel`)
    {
      window.location.href = "/Panel";
    }

  };

  const handleShow = () => setShow(true);
  return (
    <div>
      <CustomerNavbar />
      <Memory
        panel="Customer Panel "
        page=""
        current=" Add Review"
      />
      {/* when three links needed in panel, include a '/' in the middle 'page' argument */}
      <h1>Add Review</h1>
      <h2>Order ID: {getID()}</h2>
      <h2>Number of Items: {getItemLength()} </h2>
      <div className="table-responsive">
        <table className="table table-size">
          <thead>
            <tr className="top-row">
              <th>Product</th>
              <th>Product Name</th>
              <th>Rating</th>
              <th>Review</th>
            </tr>
          </thead>
          <tbody>{renderTableData()}</tbody>
        </table>
      </div>

      <button
        type="submit"
        className="confirmOrder-button-v2"
        onClick={sendData}
      >Submit</button>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <button className="page-navigating" onClick={NextPage}>Next Page</button>
      <button className="page-navigating" onClick={PrevPage}>Previous Page</button>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <BottomBar />
      <Modal show={show} onHide={handleClose} className="delete-modal">
        <Modal.Header closeButton>
          <Modal.Title>Add Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>{msg[0]}</Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            className="delete-primary"
            onClick={handleClose}
          >
            {msg[1] !== "Back" ? <Link to="./Panel">{msg[1]}</Link> : msg[1]}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default AddReview;
