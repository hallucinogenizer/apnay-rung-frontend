import "./styles.css";
import CustomerNavBar from "./CustomerNavbar";
import BottomBar from "./BottomBar";
import logo from "./css/logo.png";
import home from "./css/home.png";
import wpf from "./css/wpf.png";
import gpp from "./css/gpp.png";
import handshake from "./css/handshake.png";
import pk from "./css/pk.svg";

//temporary//
import handicraft from "./css/handi1.png";
import handicraft2 from "./css/hand2.png";
// import "bootstrap/dist/css/bootstrap.css";

const Homepage = () => {
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
      },
      {
        title: "Green Khussa",
        artist: "Wasif",
        price: "400",
        image: "https://enjoycss.com/bg-img/custom/20013-j3vxrl.njd7f.jpg"
      }
    ],
    sellers: [
      {
        name: "Sajeela",
        handicraft: "truck art",
        image: "https://enjoycss.com/bg-img/custom/20013-j3vxrl.njd7f.jpg"
      },
      {
        name: "Sajeela",
        handicraft: "truck art",
        image: "https://enjoycss.com/bg-img/custom/20013-j3vxrl.njd7f.jpg"
      },
      {
        name: "Sajeela",
        handicraft: "truck art",
        image: "https://enjoycss.com/bg-img/custom/20013-j3vxrl.njd7f.jpg"
      }
    ]
  };

  const renderProducts = () => {
    return state.products.map((product, index) => {
      const { title, artist, price, image } = product; //destructuring
      return (
        <table class="box">
          <td>
            <th class="table">
              <img src={image} alt="Italian Trulli" id="image" />
            </th>
            <th class="productDetails">
              <p class="title">
                <a href="catalog.html">{title}</a>
              </p>
              <p class="artist">Artist: {artist}</p>
              <p class="price">PKR {price}</p>
            </th>
          </td>
        </table>
      );
    });
  };
  const renderSellers = () => {
    return state.sellers.map((seller, index) => {
      const { name, handicraft, image } = seller;
      return (
        <div className="seller-main">
          <img className="main-artist-image" src={image} alt="seller" />
          <p className="main-text-seller">{name}</p>
          <p className="main-text-seller2">{handicraft}</p>
        </div>
      );
    });
  };
  return (
    <div>
      <CustomerNavBar />
      <span>
        <img className="logo-main" src={logo} alt="logo" />
        <h1 className="main-title">APNAY RUNG</h1>
      </span>
      <div className="container">
        <img className="home-background" src={home} alt="home" />
        <h2 className="home-text">DISCOVER | CONNECT | EMPOWER</h2>
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
      <p className="featured-prod">Featured Products </p>
      <div className="itemboxes">{renderProducts()}</div>
      <div className="orange-home-bar">
        <p>
          Bringing together indigenous art of Pakistan straight to your doorstep
        </p>
      </div>
      <p className="featured-prod">Explore Art by Region </p>
      <img className="flag-image" src={pk} alt="map" />
      <br />
      <br />
      <br />
      <div className="grey-home-bar">
        <p>Face of the Art</p>
      </div>
      <div className="">{renderSellers()}</div>
      <div className="grey-grey">
        <div className="grey-main">
          <img className="end-main-image" src={handshake} alt="end" />
          <br />
          Trustworthy Sellers
          <br />
          Our sellers are verified and trustworthy.
        </div>
        <div className="grey-main">
          <img className="end-main-image" src={wpf} alt="end" />
          <br />
          Cooperative Support Team
          <br />
          In case of any query of concern, our team is happy to assist.
        </div>
        <div className="grey-main">
          <img className="end-main-image" src={gpp} alt="end" />
          <br />
          High Quality Products
          <br />
          Apnay Rung ensures that our customers always receive top quality
          products.
        </div>
      </div>
      <br />
      <br />
      <br />
      <BottomBar />
    </div>
  );
};

export default Homepage;
