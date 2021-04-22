import "./styles.css";
import SellerNavbar from "./SellerNavbar";
import Memory from "./Memory";
import "./styles.css";
import { useState, useEffect } from "react";
import DefaultImg from "./css/upload-picture.jpeg"


const SellerSettings = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [currPass, setCurrPass] = useState();
  const [newPass, setNewPass] = useState();
  const [phoneNo, setPhoneNo] = useState();
  const [address, setAddress] = useState();
  const [sellerData, setSellerData] = useState({})
  const [bio, setBio] = useState();
  const [picture, setPicture] = useState([]);
  const [showPicture, setShowPicture] = useState([])
  let tokenID = localStorage.getItem("Token");
  let updatePass = false;



  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleCurrPass = (event) => {
    console.log(`printing pass`, event.target.value)
    setCurrPass(event.target.value);
  };

  const handleNewPass = (event) => {
    setNewPass(event.target.value);
  };

  const handlePhoneNo = (event) => {
    setPhoneNo(event.target.value);
  };

  const handleAddress = (event) => {
    setAddress(event.target.value);
  };

  const handleBio = (event) => {
    setBio(event.target.value);
  }

  async function sendPicture() {
    const form = document.getElementById("empty-form");
    const fileObj = new FormData(form);
    console.log(`picture`, picture)
    fileObj.append("profile_picture", picture[picture.length-1]);
    // console.log(temp);
    // console.log(questions_data);
    const response = await fetch(
      "https://apnay-rung-api.herokuapp.com/seller/update/profile_picture",
      {
        method: "POST",
        withCredentials: true,
        credentials: "include",
        headers: {
          Authorization:
          `Bearer ${tokenID}`,
        },
        body: fileObj
      }
    );
    return response;
  }

  const handlePicture = (event) => {
    console.log(`picture`, picture)
    setPicture([...picture,event.target.files[0]])
    setShowPicture([...picture,URL.createObjectURL(event.target.files[0])])
  }

  async function postData() {
    const form = document.getElementById("empty-form");

    let passChanged = false
    if (updatePass === true){
      passChanged = true
    }else{
      setNewPass("")
      passChanged = false
    }
    const temp = {
      name: name, 
      email: email, 
      passChanged: newPass, 
      passwordChanged: passChanged, 
      location: address, 
      phone: phoneNo, 
      bio: bio
    }
    // const fileObj = new FormData();
    // fileObj.append("name", name);
    // fileObj.append("email", email);
    // if (updatePass === true){
    //   fileObj.append("password", newPass);
    //   fileObj.append("passwordChanged", true)
    // }else{
    //   fileObj.append("password", "");
    //   fileObj.append("passwordChanged", false)
    // }
    // // fileObj.append("profile_picture", values.file, values.fileName);
    // fileObj.append("address", address);
    // fileObj.append("phone", phoneNo);
    // fileObj.append("bio", bio);

    // console.log(temp);
    // console.log(questions_data);
    const response = await fetch(
      "https://apnay-rung-api.herokuapp.com/seller/update",
      {
        method: "PATCH",
        withCredentials: true,
        credentials: "include",
        headers: {
          Authorization:
          `Bearer ${tokenID}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(temp)
      }
    );
    return response;
  }

  const submitHandler = async(e) => {
    e.preventDefault()

    const serverResponseData = await postData()
    const serverResponsePicture = await sendPicture()
    console.log(`in submitHandler`, serverResponseData)
    console.log(`in submitHandler`, serverResponsePicture)

  }

  const handleBlur = async (e) => {
    e.preventDefault()
    console.log(`in blurrr`)
    const serverResponse = await verifyPass()
    console.log(`printing blur resp`, serverResponse)
    if (serverResponse.verified === true){
      console.log(`wohoo`)
    }else{
      console.log(`oh shit`)
    }


  }

  async function verifyPass() {
    const temp ={
      email: email, 
      password: currPass
    }
    console.log(`temp`, temp)
    const response = await fetch(
      "https://apnay-rung-api.herokuapp.com/verify",
      {
        method: "POST",
        withCredentials: false,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(temp)
      }
    );
    // console.log(response.json());
    return response.json();
  }
  useEffect(() => {
    const getData = async (url) => {
      const response = await fetch(url, {
        method: "GET",
        withCredentials: true,
        credentials: "include",
        headers: {
          Authorization:
          `Bearer ${tokenID}`,
          "Content-Type": "application/json"
        }
      });
      return response.json();
    };
    getData("https://apnay-rung-api.herokuapp.com/seller/info").then(
    (response) => {
      setSellerData(response)
      console.log(`printing response`,response)
      setName(response.name)
      console.log(`printing name`, name)
      setEmail(response.email)
      setPhoneNo(response.phone)
      setAddress(response.location)
      setBio(response.bio)
      if (response.profile_picture === null){
        setPicture([...picture,DefaultImg])
        setShowPicture([...showPicture, DefaultImg])
      }else{
        setPicture([...picture,response.profile_picture])
        setShowPicture([...showPicture, response.profile_picture])

      }
    }
  );
  }, []);


  const displayPage = () => {
    return (
      <div className="settings-container-seller">
          <br />
          <div className="settings-heading">Account Settings</div>
          <br />
          <form
            enctype="multipart/form-data"
            method="POST"
            id="empty-form"
          ></form>
          <form className="settings-form" onSubmit={submitHandler} enctype="multipart/form-data">
            <span>
                <div className="upload-photo-div">
                    <input
                        className="seller-settings-img"
                        type="image"
                        src={showPicture[showPicture.length-1]}
                    />
                </div>
                <div className="label-name-seller-settings">Name</div>
                <input
                    className="name-form-seller-settings"
                    type="text"
                    value={name}
                    onChange={handleName}
                />     
                <br />
                <p className="label-email-seller-settings">Email</p>
                <input
                    className="email-form-seller-settings"
                    type="email"
                    value={email}
                    onChange={handleEmail}
                />
                <input
                    type="file"
                    name="file"
                    accept="image/*, application/pdf"
                    id="upload-photo-seller"
                    onChange={handlePicture}
                />
                <label for="upload-photo-seller" className = "upload-photo-seller-settings">
                    change picture
                </label> 
              </span>
            <br />
            <br />
            <span>
              <label className="label-form-cp">Current Password</label>
              <label className="label-form-np">New Password</label>
            </span>
            <br />
            <span>
              <input
                className="input-form-cp"
                type="password"
                value={currPass}
                onChange={handleCurrPass}
                onBlur={handleBlur}
              ></input>
              <input
                className="input-form-np"
                type="password"
                value={newPass}
                onChange={handleNewPass}
              ></input>
            </span>
            <br />
            <p className="label-form">Phone Number</p>
            <input
              className="input-form"
              type="tel"
              value={phoneNo}
              onChange={handlePhoneNo}
            ></input>
            <br />
            <p className="label-form">Update your city</p>
            <input
              className="input-form"
              type="text"
              value={address}
              onChange={handleAddress}
            ></input>
            <br />
            <p className="label-form">Add/Update bio</p>
            <textarea
              className="input-des"
              type="text"
              value={bio}
              onChange={handleBio}
              rows="4"
              cols="50"
            ></textarea>
              <input type="submit" className="submit-button" value="Save" />
          </form>
          <br />
      </div>
    )
  }

 
  return (
    <div className="bg-color">
      <SellerNavbar />
      <Memory panel="Customer Panel " page="" current=" Account Settings" />{" "}
      {/* when three links needed in panel, include a '/' in the middle 'page' argument */}
        {
          displayPage()
        }
        <br/>
        <br/>
        {/* <BottomBar /> */}
    </div>
  );




}

export default SellerSettings;