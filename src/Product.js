import Memory from "./Memory";
import BottomBar from "./BottomBar";
import CustomerNavbar from "./CustomerNavbar";
import AdminNavbar from "./AdminNavbar";
import HomeNavbar from "./HomeNavbar";
import SellerNavbar from "./SellerNavbar";
import React from "react";
import { useState, useEffect } from "react";
import "./styles.css";
import "./maham.css";
import CustomerNavBar from "./CustomerNavbar";
import { Modal, Button } from "react-bootstrap";

// import ProductImage from "./css/product-image.png";
import { makeStyles, withStyles } from "@material-ui/core/styles";
// import { Button } from "@material-ui/core";
// import Button from "@material-ui/core/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Box } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
// import Typography from "@material-ui/core/Typography";

const Counter = (props) => {
  const increment = () => {
    props.qtyFunc(props.qty + 1);
  };
  const decrement = () => {
    if (props.qty !== 0) {
      props.qtyFunc(props.qty - 1);
    }
  };

  return (
    <div class="quantity-box">
      <p id="qty">{props.qty}</p>
      <div class="increment-button">
        <button class="increment-button" onClick={increment}>
          {" "}
          <KeyboardArrowUpIcon
            style={{
              fontSize: "small"
            }}
          />{" "}
        </button>
        <button class="increment-button" onClick={decrement}>
          {" "}
          <KeyboardArrowDownIcon
            style={{
              fontSize: "small"
            }}
          />{" "}
        </button>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  button: {
    // margin: theme.spacing(1),
    color: "#ffffff",
    backgroundColor: "#d67d20",
    // marginLeft: "51%",
    // marginTop: "-14%"
  }
}));
const StyledRating = withStyles({
  root: {
    // marginTop: "-100%",
    // marginLeft: "30%"
  },
  iconFilled: {
    color: "#d67d20"
  },
  iconHover: {
    color: "#ff3d47"
  }
})(Rating);
const Product = () => {
  const [qty, setQuantity] = useState(1);
  const classes = useStyles();
  const tokenID = localStorage.getItem("Token");
  const usertype = localStorage.getItem("TypeOfUser");

  const GetNavbar = () =>{
    if (tokenID === null){
      return (
        <HomeNavbar/>
      )
    }
    else if (usertype === "customer"){
      return(
        <CustomerNavbar/>
      )
    }
    else if (usertype === "admin"){
      return (
        <AdminNavbar/>
      )
    }
    else if (usertype === "seller"){
      return (
        <SellerNavbar/>
      )
    }
  }

  const product = JSON.parse(localStorage.getItem("productID"));
  
  let productData = {
    name: product.title,
    inStock: product.stock,
    rating: product.rating,
    Description: product.description,
    Price: product.price,
    productID: product.item_id
  };
  console.log(`product is ${productData.rating}`);


  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const getReviews = async (url) => {
      const response = await fetch(url, {
        method: "GET",
        withCredentials: false
      });
      return response.json();
    };

    getReviews(
      `https://apnay-rung-api.herokuapp.com/order/review/item/${product.item_id}`
    ).then((response) => {
      console.log(`reviews`);
      let allReviews = [];
      let reviewArray=[];
      try{
        response.map((element,ind)=>{
          console.log(`element of review`)
          console.log(response[ind][2])
          if (allReviews.length === 0) {
            allReviews[0] = {
              rating: response[ind][1],
              review: response[ind][2]
            };
          } else {
            allReviews.push({
              rating:response[ind][1],
              review: response[ind][2]
            });
          }

        })
        }catch{}
      
      setReviews((allReviews));
      
    });

  }, []);

  const sellerid = product.seller_id;
  const [sellerBio, setSellerBio] = useState(``);
  const [sellerName, setSellerName] = useState(``);
  useEffect(() => {
    const getSellerBio = async (url) => {
      const response = await fetch(url, {
        method: "GET",
        withCredentials: false
      });
      return response.json();
    };

    console.log(`seller id ${sellerid}`)
    getSellerBio(
      `https://apnay-rung-api.herokuapp.com/seller/id/${sellerid}`
    ).then((response) => {
      console.log(`seller bio ${response.bio}`);
      console.log(response);
      setSellerBio(response.bio);
      setSellerName(response.name)
    });
  }, []);

  let ArtisanData = {
    name: sellerName
  };

  // console.log(`helo`);
  console.log(ArtisanData.name);

  const [value] = React.useState(productData.rating);

  const renderReviews = () => {
    console.log(`my ${reviews}`);
    const reviewsofItem = reviews.slice();
    return reviewsofItem.map((rev, index) => {
      const { rating, review } = rev; //destructuring
      console.log(`momib`);
      console.log(review);
      return (
        <div>
          <p>
            <div className="reviewer-name">Reviewer</div>
            <br />
          </p>
          <div className="reviewer-rating">
            <Box component="fieldset" mb={3} borderColor="transparent">
              <StyledRating name="read-only" value={rating} readOnly />
              {review}
            </Box>
          </div>
          <br />
        </div>
      );
    });
  };

  const[msg,setMsg]= useState([``])
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  const addToCartHandler = (qty) => {

    if(productData.inStock>=qty){
      let cart = [];

      cart = JSON.parse(localStorage.getItem("shoppingCart"));
      console.log(cart);
  
      let newProduct = {
        productID: product.item_id,
        productTitle: product.title,
        quantity: qty,
        price: product.price,
        image: product.image,
        totalQuantity: product.stock,
        sellerID: product.seller_id
      };
  
      if (cart == null) {
        cart = [];
        cart[0] = newProduct;
      } else {
        cart.push(newProduct);
      }
  
      localStorage.setItem("shoppingCart", JSON.stringify(cart));
      setMsg([`Product Added`,`Product has been added to your cart.`])
      handleShow()
    }
    else
    {
      setMsg([`We're sorry!`,`Product is out of stock or the desired quantity is not available.`])
      handleShow()
    }
    
  };

  // localStorage.removeItem("shoppingCart");
  const renderProduct = () => {
    const { productID, name, Price } = productData;
    let InStockArr = [];

    if (productData.inStock >= 1) {
      InStockArr = [<span>&#10003; {`${productData.inStock} in stock`}</span>];
    } else {
      InStockArr = [<span>&#x2613; {`out of stock`}</span>];
    }

    console.log(`IN STOCK ${productData.inStock}`)

    return (
      <div>
        <div className="productpage-div">
          <div className="productpage-image">
            <img className="product-image" src={product.image} alt="Logo" />
          </div>
          <div className="product-details">
            <div className="product-title">{product.title}</div>
            <p className="in-stock">{InStockArr}</p>
            <div className="rating">
              {/* {`${productData.rating}/5.0`} */}
              <Box component="fieldset" mb={3} borderColor="transparent">
                <span>
                  {productData.rating}/5.0
                  {/* <Typography component="legend"></Typography> */}
                  <StyledRating name="read-only" value={value} readOnly />
                </span>
              </Box>
           </div>
            <div className="product-desc">
              <h4>Description:</h4>
              <p className="description">{productData.Description}</p>
            </div>
            <div>
              <div className="price-text">Rs.{productData.Price}</div>
              <p className="quantity">per piece</p>
            </div>
            <div className="cart-button-product">
            <Counter
                className="quantity-counter"
                qty={qty}
                qtyFunc={setQuantity}
              />
            <Button
              variant="contained"
              color="default"
              className={classes.button}
              startIcon={<ShoppingCartIcon />}
              onClick={() => addToCartHandler(qty)}
            >
              Add to Cart
            </Button>
            </div>
            <div className="productpage-artisan">
            <div className="artisan-product-page">
              <h3 className="artisan-title">Artisan</h3>
              <div className="artisan-name">{ArtisanData.name}</div>
              <div className="artisan-bio">{sellerBio}</div>
            </div>
            </div>
          </div>
        </div>
        <div className="review">
          <div className="reviews-heading">Reviews</div>
          {renderReviews()}
        </div>
      </div>
    );
  };

  return (
    <div>
      {GetNavbar()}
      <Memory panel="Catalog " current={product.title} />
      {/* <a id=back-btn><img src=/css/back.png width="26"></a> */}
      {renderProduct()}
      <BottomBar />
      <Modal
        show={show}
        onHide={() => handleClose()}
        className="delete-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>{msg[0]}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{msg[1]}</Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => handleClose()}
            className="delete-primary"
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Product;
