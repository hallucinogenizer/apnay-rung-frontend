import React from "react";
import { useState } from "react";
import "./styles.css";
import CustomerNavBar from "./CustomerNavbar";
import Memory from "./Memory";
import BottomBar from "./BottomBar";
import ProductImage from "./css/product-image.png";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
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
    marginLeft: "51%",
    marginTop: "-14%"
  }
}));
const StyledRating = withStyles({
  root: {
    // marginTop: "-100%",
    marginLeft: "30%"
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
  let productData = {
    name: "Multani Ceramic Dishes",
    inStock: 1,
    rating: 4,
    Description: "Multi-colored satin glazed",
    Additional: "Single pieces or as pair (same or different dishes)",
    Price: 1200
  };

  let ArtisanData = {
    name: "Humaira Abid",
    bio:
      "She belongs to the city of shrines where she learnt the art from her father at an early age and now she uses it as her primary source of income"
  };

  let state = {
    reviews: [
      {
        name: "Momina Amer",
        rating: 4,
        review:
          "The delivery of the bowls was super quick which was quite a pleasant surprise. As for the quality of the bowls, they were extremely beautiful and of above average quality."
      },

      {
        name: "Vafa Batool",
        rating: 5,
        review: "9/10 quality. Would totally recommend!!!"
      }
    ],
    product: {
      productID: "00199",
      productTitle: "Multani Ceramic ",
      quantity: 1,
      price: 200
    }
  };

  const [value] = React.useState(productData.rating);
  // const [qty, setQuantity] = useState(quantity);

  const renderReviews = () => {
    return state.reviews.map((rev, index) => {
      const { name, rating, review } = rev; //destructuring
      return (
        <div>
          <p>
            <div className="reviewer-name">{name}</div>
            <br />
          </p>
          <div className="reviewer-rating">
            <Box component="fieldset" mb={3} borderColor="transparent">
              <StyledRating name="read-only" value={rating} readOnly />
            </Box>
          </div>
          <br />
          <div>{review}</div>
        </div>
      );
    });
  };

  //destructuring
  // const [qty, setQuantity] = React.useState(quantity);

  const addToCartHandler = (qty) => {
    let cart = [];

    cart = JSON.parse(localStorage.getItem("shoppingCart"));
    console.log(cart);

    let newProduct = {
      productID: state.product.productID,
      productTitle: productData.name,
      quantity: qty,
      price: productData.Price
    };

    if (cart == null) {
      cart = [];
      cart[0] = newProduct;
    } else {
      cart.push(newProduct);
    }

    localStorage.setItem("shoppingCart", JSON.stringify(cart));
  };

  // localStorage.removeItem("shoppingCart");
  const renderProduct = () => {
    const { productID, Title, quantity, cost } = state.product;
    let InStockArr = [];

    if (productData.inStock === 1) {
      InStockArr = [<span>&#10003; {`in stock`}</span>];
    } else {
      InStockArr = [<span>&#x2613; {`out of stock`}</span>];
    }

    return (
      <div>
        <span>
          <img className="product-image" src={ProductImage} alt="Logo" />
          <div className="product-title">{productData.name}</div>
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
            <p className="description">
              {productData.Description} <br /> {productData.Additional}{" "}
            </p>
          </div>
          {/* <div>{productData.Description}</div>
            <div>{productData.Additional}</div> */}
          {/* <div className="price-text">{productData.Price}</div> */}
          <div>
            <div className="price-text">Rs.{productData.Price}</div>
            <p className="quantity">per piece</p>

            <Counter
              className="quantity-counter"
              qty={qty}
              qtyFunc={setQuantity}
            />
          </div>
          <Button
            variant="contained"
            color="default"
            className={classes.button}
            startIcon={<ShoppingCartIcon />}
            onClick={() => addToCartHandler(qty)}
          >
            Add to Cart
          </Button>
          <div className="artisan-product-page">
            <h3 className="artisan-title">Artisan</h3>
            <div className="artisan-name">{ArtisanData.name}</div>
            <div className="artisan-bio">{ArtisanData.bio}</div>
          </div>
        </span>
        <div className="review">
          <div className="reviews-heading">Reviews</div>
          {renderReviews()}
        </div>
      </div>
    );
  };

  return (
    <div>
      <CustomerNavBar />
      <Memory panel="Catalog " page="Home" current=" Kitchen" />
      {/* <a id=back-btn><img src=/css/back.png width="26"></a> */}
      {renderProduct()}
      <BottomBar />
    </div>
  );
};

export default Product;
