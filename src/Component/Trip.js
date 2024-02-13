import "./Trip.css";
// import TripData from "./TripData";
import SetData from "./setData";
import { useState } from "react";
import imagehero from "../asserts/iconic1.jpg";
// import imagehero2 from "../asserts/iconic2.jpg"
function Trip(props) {
  const setscreenImage = (image) => {
    props.DoIt(image);
  };

  const [disblemore, setDisablemoreBtn] = useState(false);
  const disablemorebtn = (e) => {
    
    if (e === true) {
      setDisablemoreBtn(true);
    } else {
      setDisablemoreBtn(false);
    }
  };
 
  const [current, setCurrent] = useState(0);
  function getforcurrent(input) {
    if (current > 0 || input === 3) {
      const newcurrent = current + input;
      setCurrent(newcurrent);
    }
  }
  
  const handleClick = (e) => {
    const button = e.target;

    document.location.href = "#trips";
    if (button.textContent === "See less <<") {
      getforcurrent(-3);
      setDisablemoreBtn(false);
    } else if (button.textContent === "See more >>") {
      getforcurrent(3);
    }
  };
 
  const buttonless = (
    <button
      className="more"
      key={1}
      onClick={handleClick}
      disabled={current < 3 ? true : false}
    >
      See less {"<<"}
    </button>
  );
 
  const buttonmore = (
    <button
      className="more"
      key={2}
      onClick={handleClick}
      disabled={disblemore}
    >
      See more {">>"}
    </button>
  );
  return (
    <div className="trips" id="trips">
      <h2> Recent Trips</h2>
      <p>
        Gedeo Zone in Southern Nations Nationalities and Peoples’ Region (SNNPR){" "} 
      </p>
      <div className="trip-cards" id="trip-cards" data-aos="fade-up">
        <SetData
          key={1}
          image1={imagehero}
          DoIt={setscreenImage}
          delay={".5s"}
          Current={current}
        DoItBTn={disablemorebtn}
          from="trip"
        ></SetData>
     
      </div>
      <div className="more-less">
        {buttonless}
        {buttonmore}
      </div>
    </div>
  );
}
export default Trip;
