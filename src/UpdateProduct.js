import "./styles.css";
import React, { useState } from "react";
import SellerNavbar from "./SellerNavbar";
import Memory from "./Memory";
import BottomBar from "./BottomBar";

const UpdateProduct = () => {
  const [state, setState] = useState({
    title: "",
    description: "",
    category: "",
    image: "",
    price: 0,
    stock: 0
  });
  // const [state, setState] = useState()
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);

  const SubmitHandler = () => {
    console.log(`submitted form`);
    setState({
      title: title,
      description: description,
      category: category,
      image: image,
      price: price,
      stock: stock
    });
    console.log(state);
    //send 'state'to backend
  };
  const TitleChangeHandler = (event) => {
    console.log(
      `in change handler ${event.target.name}, ${event.target.value}`
    );
    setTitle(event.target.value);
  };
  const DescriptionChangeHandler = (event) => {
    console.log(`in change handler, ${event.target.value}`);
    setDescription(event.target.value);
  };
  const CategoryChangeHandler = (event) => {
    console.log(
      `in change handler ${event.target.name}, ${event.target.value}`
    );
    setCategory(event.target.value);
  };
  const PriceChangeHandler = (event) => {
    console.log(
      `in change handler ${event.target.name}, ${event.target.value}`
    );
    setPrice(event.target.value);
  };
  const StockChangeHandler = (event) => {
    console.log(
      `in change handler ${event.target.name}, ${event.target.value}`
    );
    setStock(event.target.value);
  };
  const ImageChangeHandler = (event) => {
    console.log(`in change handler: ${event.target.value}`);
    let file = event.target.file;
    let data = new FormData();
    console.log(file);
    if (file) {
      data.append("file", file);
    }
    setImage(data);
  };
  return (
    <div className="productForm">
      <SellerNavbar />
      <Memory panel="Seller Panel " page="" current=" Update Product" />{" "}
      <h1>Update Product</h1>
      <form className="form-product" onSubmit={SubmitHandler}>
        <p className="label-form"> Product Title </p>
        <input
          className="input-form"
          type="text"
          name="title"
          onChange={TitleChangeHandler}
        ></input>
        <p className="label-form"> Product Description </p>
        <textarea
          className="input-des"
          type="text"
          name="additional_info"
          placeholder="e.g. Color: blue, length: 2m"
          onChange={DescriptionChangeHandler}
          rows="4"
          cols="50"
        ></textarea>
        {/* <input
          className="input-des"
          type="text"
          name="description"
          onChange={DescriptionChangeHandler}
        ></input> */}
        <p className="label-form"> Product Category </p>
        <select
          className="input-form"
          name="category"
          value=""
          onChange={CategoryChangeHandler}
        >
          <option value="">--</option>
          <option value="Bags">Bags</option>
          <option value="Decor">Decor</option>
          <option value="Clothing">Clothing</option>
          <option value="Footwear">Footwear</option>
          <option value="Jewellery">Jewellery</option>
          <option value="Crockery">Crockery</option>
        </select>
        <p className="label-form">Upload Product Image</p>
        <label className="label-button">
          Choose File
          <input type="file" name="image" onChange={ImageChangeHandler}></input>
        </label>
        <p className="label-form">Product Price</p>
        <input
          className="input-form"
          type="text"
          name="price"
          onChange={PriceChangeHandler}
        ></input>
        <p className="label-form">Number of Pieces in Stock</p>
        <input
          className="input-form"
          type="text"
          name="stock"
          onChange={StockChangeHandler}
        ></input>
        <br />
        <input type="submit" className="submit-button" value="Submit"></input>
      </form>
      <BottomBar />
    </div>
  );
};
export default UpdateProduct;
