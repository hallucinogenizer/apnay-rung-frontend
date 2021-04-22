import SellerNavbar from "./SellerNavbar";
import Memory from "./Memory";
import BottomBar from "./BottomBar";
import ModalVideo from 'react-modal-video';
import React, {useState, useEffect} from "react";
import ReactPlayer from 'react-player';
import "react-modal-video/scss/modal-video.scss";



const ViewTutorials = () => {
    const [isOpen, setOpen] = useState(false)
    const [videoID, setVideoID] = useState('')
    const [videos, setVideos] = useState([])
    let tokenID = localStorage.getItem("Token");

    
    const videosArray = [
        {
            heading: "How to use Apnay Rung", 
            description: "Watch this video to find to navigate through this website. Click here to view.",
            ID: "vvF7uiBH-8I"
        },
        {
            heading: "How to add a new product", 
            description: "Watch this video to find out how to add new products to your inventory. Click here to view.",
            ID: "vvF7uiBH-8I"
        },
        {
            heading: "How to delete a product", 
            description: "Watch this video to find out how to delete products from your inventory. Click here to view.",
            ID: "vvF7uiBH-8I"
        },
        {
            heading: "How to view Inventory", 
            description: "Watch this video to find out how to access your inventory. Click here to view.",
            ID: "vvF7uiBH-8I"
        },
        {
            heading: "How to process orders", 
            description: "Watch this video to find out how to view and process orders that you have recieved. Click here to view.",
            ID: "vvF7uiBH-8I"
        },
        {
            heading: "How to access Sales Reports", 
            description: "Watch this video to find out how to access your monthly sales report. Click here to view.",
            ID: "vvF7uiBH-8I"
        }
    ]
    
    useEffect(() => {
        const getData = async (url) => {
          const response = await fetch(url, {
            method: "GET",
            withCredentials: true,
            credentials: "include",
            headers: {
              Authorization:
              `Bearer ${tokenID}`,
            }
          });
          return response.json();
        };
        getData("https://apnay-rung-api.herokuapp.com/tutorial/all").then(
        (response) => {
          console.log(`printing videos from back`, response)
        }
      );
      }, []);
    
    const handleVideoPlayer =(videoID) =>{
        setOpen(true); 
        setVideoID(videoID)
    }

    return(
        <div>
            <SellerNavbar />
            <Memory panel="Tutorials "/>
            <div className="artisans-heading">View Tutorials</div>            
            {/* <BottomBar /> */}
            <div>
            </div>
            <React.Fragment>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId= {videoID} onClose={() => setOpen(false)} />
            </React.Fragment>
            <div className ="tutorial-div">
            {videosArray.map((video) => (
                <button className="tutorial-btn" onClick={()=> handleVideoPlayer(video.ID)}>
                <div className="button-heading-tutorial">{video.heading}</div>
                <div className="button-text-tutorial">{video.description}</div>
            </button>
              ))}
            </div>

           <BottomBar /> 
        </div>

    )



}

export default ViewTutorials

