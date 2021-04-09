import "./styles.css";
import "./maham.css";
import CustomerNavbar from "./CustomerNavbar";
import Memory from "./Memory";
import BottomBar from "./BottomBar";

const Catalog = () => {
  let state = {
    //state is by default an object
    products: [
      {
        title: "Green Khussa",
        artist: "Wasif",
        price: "400",
        image: "https://enjoycss.com/bg-img/custom/20013-j3vxrl.njd7f.jpg"
      },
      {
        title: "Green Khussa",
        artist: "Wasif",
        price: "400",
        image: "https://enjoycss.com/bg-img/custom/20013-j3vxrl.njd7f.jpg"
      },
      {
        title: "Green Khussa",
        artist: "Wasif",
        price: "400",
        image: "https://enjoycss.com/bg-img/custom/20013-j3vxrl.njd7f.jpg"
      },
      {
        title: "Green Khussa",
        artist: "Wasif",
        price: "400",
        image: "https://enjoycss.com/bg-img/custom/20013-j3vxrl.njd7f.jpg"
      },
      {
        title: "Green Khussa",
        artist: "Wasif",
        price: "400",
        image: "https://enjoycss.com/bg-img/custom/20013-j3vxrl.njd7f.jpg"
      }
    ]
  };

  const renderProducts = () => {
    return state.products.map((product, index) => {
      const { title, artist, price, image } = product; //destructuring
      return (
        <div className="product-div">
          <img className="product-img" src={image} alt="product" />
          <h3>{title}</h3>
          <h5>Artist: {artist}</h5>
          <h5>Price: Rs {price}</h5>
        </div>
      );
    });
  };
  return (
    <div>
      <CustomerNavbar />
      <Memory panel="" page="" current="Catalog" />{" "}
      {/* when three links needed in panel, include a '/' in the middle 'page' argument */}
      <h1>Catalog</h1>
      <br></br>
      <div class="filters">
        <input type="button" className="sortbars" value="Sort A-Z" />
        <input type="button" className="sortbars" value="Sort $-$$" />
        <input type="button" className="sortbars" value="Filter" />
      </div>
      <div className="main">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search Products"
          ></input>
          <div className="input-group-append">
            <button className="btn btn-secondary" type="button">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
      </div>
      <br />
      <div className="space"></div>
      <div className="catalog-adjust">{renderProducts()}</div>
      {/* <div class="itemboxes">{renderProducts()}</div> */}
      <BottomBar />
    </div>
  );
};

export default Catalog;
