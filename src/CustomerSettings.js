import "./styles.css";
import CustomerNavbar from "./AdminNavbar";
import Memory from "./Memory";
import BottomBar from "./BottomBar";
import { useState, useEffect } from "react";
import back_image from "./css/back.png";
import background from "./css/settings-bg.jpg"

const CustomerSettings = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [currPass, setCurrPass] = useState();
  const [newPass, setNewPass] = useState();
  const [phoneNo, setPhoneNo] = useState();
  const [address, setAddress] = useState();
  const [customerData, setCustomerData] = useState({})
  const [errors, setErrors] = useState({});
  const [check, setCheck] = useState([]);

  let tokenID = localStorage.getItem("Token");
  let updatePass = false;


  const handleName = (event) => {
    setName(event.target.value);
    setCheck([1]);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
    setCheck([1]);

  };

  const handleCurrPass = (event) => {
    setCurrPass(event.target.value);
    setCheck([1]);

  };

  const handleNewPass = (event) => {
    setNewPass(event.target.value);
    setCheck([1]);

  };

  const handlePhoneNo = (event) => {
    setPhoneNo(event.target.value);
    setCheck([1]);

  };

  const handleAddress = (event) => {
    setAddress(event.target.value);
    setCheck([1]);

  };

  async function verifyPass() {
    const response = await fetch(
      "https://apnay-rung-api.herokuapp.com/verify",
      {
        method: "POST",
        withCredentials: false,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email,
          password: currPass
        })
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
    getData("https://apnay-rung-api.herokuapp.com/customer/info").then(
    (response) => {
      setCustomerData(response)
      console.log(`printing customer data`, customerData)
      console.log(`printing response`,response)
      setName(response.name)
      console.log(`printing name`, name)
      setEmail(response.email)
      setPhoneNo(response.phone)
      setAddress(response.location)
    }
  );
  }, []);

  // useEffect(() => {
  //   const sendData = async (url) => {
  //     const response = await fetch(url, {
  //       method: "PATCH",
  //       withCredentials: true,
  //       credentials: "include",
  //       headers: {
  //         Authorization:
  //         `Bearer ${tokenID}`,
  //         "Content-Type": "application/json"
  //       }
  //     });
  //     return response.json();
  //   };
  //   sendData("https://apnay-rung-api.herokuapp.com/customer/update").then(
  //   (response) => {
  //     setSellerData(response)
  //     console.log(`printing seller data`, sellerData)
  //     console.log(`printing response`,response)
  //     setName(response.name)
  //     console.log(`printing name`, name)
  //     setEmail(response.email)
  //     setPhoneNo(response.phone)
  //     setAddress(response.location)
  //     setBio(response.bio)
  //     if (response.profile_picture === null){
  //       setPicture([...picture,DefaultImg])
  //     }else{
  //       setPicture([...picture,response.profile_picture])
  //     }
  //   }
  // );
  // }, []);

  async function postData() {
    const form = document.getElementById("empty-form");
    const fileObj = new FormData(form);
    fileObj.append("name", name);
    fileObj.append("email", email);
    if (updatePass === true){
      fileObj.append("password", newPass);
      fileObj.append("passwordChanged", true)
    }else{
      fileObj.append("password", "");
      fileObj.append("passwordChanged", false)
    }
    // fileObj.append("profile_picture", values.file, values.fileName);
    fileObj.append("address", address);
    fileObj.append("phone", phoneNo);

    // console.log(temp);
    // console.log(questions_data);
    const response = await fetch(
      "https://apnay-rung-api.herokuapp.com/customer/update",
      {
        method: "PATCH",
        withCredentials: true,
        credentials: "include",
        headers: {
          Authorization:
          `Bearer ${tokenID}`,
          "Content-Type": "application/json"
        },
        body: fileObj
      }
    );
    return response;
  }

  const handleBlur = async (e) => {
    e.preventDefault()
    console.log(`in blurrr`)
    const serverResponse = await verifyPass()
    console.log(`printing blur resp`, serverResponse)
    if (serverResponse.verified === true){
      console.log(`wohoo`)
      setErrors({...errors, currPass: '                     '})
      updatePass = true;
    }else{
      console.log(`oh shit`)
      setErrors({...errors, currPass: 'Password is incorrect'})
    }


  }
  const handleBlur2 = async (e) => {
    console.log(`in new pass blurrr`)
    if (newPass){
      console.log(`curr pass`, currPass)
      if (!currPass){
        setErrors({...errors, currPass: 'Enter current password first'})
      }else if (newPass.length < 6){
      setErrors({...errors, newPass: 'Must have 6 characters at least'})
    }else{
      setErrors({...errors, newPass: ''})

    }
  }
  }

  const submitHandler = async(e) => {
    e.preventDefault();

    const serverResponse = await postData();
    console.log(`printing response`, serverResponse)



  }

  const displayPage = () => {
    return (
      <div className="settings-container">
          <br />
          <div className="settings-heading">Account Settings</div>
          <br />
          <form
            enctype="multipart/form-data"
            method="POST"
            id="empty-form"
          ></form>
          <form className="settings-form" enctype="multipart/form-data">
            <p className="label-form">Name:</p>
            <input
              className="input-form"
              type="text"
              value={name}
              onChange={handleName}
            />
            <br />
            <p className="label-form">Email:</p>
            <input
              className="input-form"
              type="text"
              value={email}
              onChange={handleEmail}
            ></input>
            <br />
            <span>
            {errors.currPass && (
              <div className="err-settings-currPass">{errors.currPass}</div>
            )}
            {errors.newPass && (
              <div className="err-settings-newPass">{errors.newPass}</div>
            )}
            </span>
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
                onBlur = {handleBlur}
              ></input>
              <input
                className="input-form-np"
                type="password"
                value={newPass}
                onChange={handleNewPass}
                onBlur = {handleBlur2}
              ></input>
            </span>
            <br />
            <p className="label-form">Phone Number:</p>
            <input
              className="input-form"
              type="tel"
              value={phoneNo}
              onChange={handlePhoneNo}
            ></input>
            <br />
            <p className="label-form">Address:</p>
            <textarea
              className="input-des"
              type="text"
              value={address}
              onChange={handleAddress}
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
      <CustomerNavbar />
      <Memory panel="Customer Panel " page="" current=" Account Settings" />{" "}
      {/* when three links needed in panel, include a '/' in the middle 'page' argument */}
        {
          displayPage()
        }
        {/* <BottomBar /> */}
    </div>
  );
};

export default CustomerSettings;
