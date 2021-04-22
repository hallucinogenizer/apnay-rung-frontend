import HomeNavbar from "./HomeNavbar";
import CustomerNavbar from "./CustomerNavbar";
import AdminNavbar from "./AdminNavbar";
import SellerNavbar from "./SellerNavbar";
import Memory from "./Memory";
import Artisan1 from "./css/1.png"
import Artisan2 from "./css/2.png"
import Artisan3 from "./css/3.png"
import Artisan4 from "./css/Artisan4.jpg"
import Artisan5 from "./css/Artisan5.jpg"
import Artisan6 from "./css/Artisan6.jpg"
import Artisan7 from "./css/Artisan8.jpg"
import SpotlightArtisan from "./css/ArtisanSpotlight.jpg"

import "./vafa.css";

const Artisans = () => {
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

    const displayTopPictures = () => {
        return(
            <div className="row">
                <div className = "column">
                    <img className = "artisan3-img-top" src= {Artisan1} alt="seller"/>
                </div>
                <div className = "column">
                    <img className = "artisan-img-top" src= {Artisan2} alt="seller"/>
                </div>
                <div className = "column">
                    <img className = "artisan-img-top" src= {Artisan3} alt="seller"/>
                </div>
            </div>
        )
        
    }

    const displaySpotlightArtisan = () => {
        return (
            <div className = "artisan-spotlight-container">
                <span>
                <img className= "artisan-spotlight-img" src= {SpotlightArtisan} alt="seller"/>
                <div className="artisan-spotlight-name">Sahela Bibi</div>
                <div className="artisan-spotlight-description"> <br/>Meet our second time running artisan in the spotlight! <br/><br/>Nine years ago, in a small village of Name Shah Feisal colony, Sahela started her embroidery. Her work journey started out of a dire situation when her husband passed away in a truck accident. With her children still really young, she had to hold the reins to maintain the income of her household. First she learnt the craft firsthand from the women of her village but her determination pushed her to go work in the factory. <br/> We discovered Sahela last year perchance and her products have been a hit since the start. <br /> Please show your support to her cause by buying her products from the Catalog --- all as vibrant as her smile!
                  </div>
                </span>
            </div>
        )
    }

    return(
        <div>
        {GetNavbar()}
        <Memory panel="Artisans "/>
        <div className ="artisans-heading">Meet the Artisans</div>
        {displayTopPictures()
        }
        <div className="spotlight-strip-container">
            <div className="spotlight-heading">Artisan in the Spotlight</div>
        </div>
        <br />
                <br />
                <br />
                <br />
        {
             displaySpotlightArtisan()
        }
        <div className="rest-of-heroes-heading">Rest of the Heroes</div>
        <span>
            <div className="rest-of-heroes-container">
            <img className="rest-of-heroes-img" src= {Artisan4} alt="seller"/>
            <h3>Shoaib Lala</h3>
            <h5>Peshawari Carpets</h5>
            </div>

            <div className="rest-of-heroes-container">
            <img className="rest-of-heroes-img" src= {Artisan5} alt="seller"/>
            <h3>Maryam Noor</h3>
            <h5>Jute rugs</h5>
            </div>

            <div className="rest-of-heroes-container">
            <img className="rest-of-heroes-img" src= {Artisan6} alt="seller"/>
            <h3>Amjad Sahab</h3>
            <h5>Hala pottery</h5>
            </div>

            <div className="rest-of-heroes-container">
            <img className="rest-of-heroes-img" src= {Artisan7} alt="seller"/>
            <h3>Hashim Junaid</h3>
            <h5>Handmade carpets</h5>
            </div>

        </span>
        
        </div>
    );
}; 

export default Artisans; 