import Navbar from "../Component/Navbar";
import AddTripData from "../Component/addTripdata";
import AddDetinationData from "../Component/addDestination";
import Hero from "./hero";
import "./adminside.css";
import axios from "axios";
import imagehero from "../asserts/iconic1.jpg";
import { Link } from "react-router-dom";
import React, { useRef, useState } from "react";

function AdminSide(props) {


  const [option, setOption] = useState("Add Trip");
  const [show, setShow] = useState("flex");
  let [msg, setMessage] = useState("");
  let [Messagecolor, setMessagecolor] = useState("red");
  const [imageFile, setImageFile] = useState(null);
  const [imageFile2, setImageFile2] = useState(null);

  const form = useRef();
  const loginform = useRef();
  const login = (e) => {
    let err = "";
    e.preventDefault();

    if (e.target.user_name.value.trim() === "") {
      err = "Please enter user name";
    } else if (e.target.password.value.trim() === "") {
      err = "Please enter password";
    }
    if (err !== "") {
      setMessage(err);
      return;
    } else {
      // Make a POST request to the /login endpoint on the server
      axios
        .post("/login", {
          username: e.target.user_name.value,
          password: e.target.password.value,
        })
        .then((response) => {
          
          if (response.data.message === "Invalid") {
            setMessage("Invalid user name or password");
          } else if (response.data.message === "valid") {
            setMessage("");
            setShow("none");
          } else {
            // If the request is not successful, the user is not authenticated
            setMessage(" please try again");
          }
        })
        .catch((error) => {
          // Handle the error
          console.log(error);
        });
    }
  };
  const deleteError = () => {
    setMessage("");
  };
  const SaveData = (e) => {
    let err = "";
    e.preventDefault();
    console.log(e.target.save);
    if (imageFile === null) {
      err = "Please choose image";
    }
   else if (option === "Add Destination") {
      if (imageFile2=== null) {
        err = "Please choose second image";
      } else if (e.target.Gedeuffa.value.trim() === "") {
        err = "Please enter Gedeuffa Description";
      } else if (e.target.Amaharic.value.trim() === "") {
        err = "Please enter Amaharic Description";
      }
    } else if (e.target.Heading.value.trim() === "") {
      err = "Please enter Heading";
    } else if (e.target.Description.value.trim() === "") {
      err = "Please enter main/English Description";
    }

    if (err !== "") {
      setMessagecolor("red");
      setMessage(err);
      return;
    } else {
      const formdata = new FormData();
      let to = "addTripData";
      formdata.append("file", imageFile);
      formdata.append("option", option);
      if (option === "Add Destination") {
        formdata.append("file", imageFile2);
        formdata.append("amaharic", e.target.Amaharic.value);
        formdata.append("gedeuffa", e.target.Gedeuffa.value);
        to = "addDesData";
      }
      formdata.append("english", e.target.Description.value);
      formdata.append("Header", e.target.Heading.value);
      
      axios
        .post(to, formdata)
        .then((response) => {
          console.log(response.data);
          if (response.data.message === "Inserted") {
            setMessagecolor("green");
          }
          setMessage(response.data.message);
        })
        .catch((error) => {
          console.log(error);
        });
     
      
    }
  };
  const setscreenImage = (image) => {
    setImageFile(image);
    props.DoIt(image);
  };
  const changeOption = (e) => {
    e.preventDefault();
    setImageFile(null)
    setOption(e.target.textContent);
  };

  return (
    <>
      <Navbar from="admin" key={"admin"} />
      <Hero
        cName="hero-small"
        image={imagehero}
        title="Admin"
        btnClass="hide"
      />

      <form
        ref={form}
        className="  admincontainer "
        onSubmit={SaveData}
        style={{ display: show === "none" ? "flex" : "none" }}
        encType="multipart/form-data"
      >
        <div className="buttons ">
          <button
            className={option === "Add Trip" ? "btn active" : "btn"}
            onClick={changeOption}
          >
            Add Trip
          </button>
          <button
            className={option === "Add Destination" ? "btn active" : "btn"}
            onClick={changeOption}
          >
            Add Destination
          </button>
        </div>

        <AddTripData
          forwho={option}
          DoIt={setscreenImage}
          msg={msg}
         
          onFocus={deleteError}
          setImageFile={setImageFile}
          setMessagecolor={setMessagecolor}
        ></AddTripData>
        <AddDetinationData
          forwho={option}
          DoIt={setscreenImage}
          msg={msg}
          Messagecolor={Messagecolor}
         
          onFocus={deleteError}
          setImageFile={setImageFile}
          setImageFile2={setImageFile2}
        ></AddDetinationData>
      </form>
      <form
        className="logInform"
        style={{ display: show }}
        ref={loginform}
        onSubmit={login}
      >
        <div className="form formcomponent">
          <h2>Log In</h2>
          <input
            type="text"
            placeholder="User Name"
            name="user_name"
            onFocus={deleteError}
          ></input>
          <input
            type="password"
            placeholder="Password"
            name="password"
            onFocus={deleteError}
          ></input>

          <p className="errormsg" style={{ color: "red" }}>
            {msg}
          </p>
          <button type="submit" className="btn">
            Go
          </button>
          <Link to="/forget">have you forget password?</Link>
        </div>
      </form>
    </>
  );
}

export default AdminSide;
