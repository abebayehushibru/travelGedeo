
  
import "./adminside.css";
import imagehero from "../asserts/insert-image-icon.png";
import imagehero2 from "../asserts/insert-image-icon.png";
import React, { useState } from "react";
function AddDetinationData(props) {
  const [image, setImage] = useState(imagehero);
  const [image2, setImage2] = useState(imagehero2);
 
  const setImageInImg = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
      props.setImageFile(e.target.files[0])
    }
  };
  const setImageInImg2 = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage2(URL.createObjectURL(e.target.files[0]));
    
      props.setImageFile2(e.target.files[0])
    }
  };
  
  const viewImageInImg = (e) => {
    
    props.DoIt(image);
  };
  const viewImageInImg2 = () => {
    
    props.DoIt(image2);
  };
  if(props.forwho==="Add Destination") {
    return (
        <> <div className="DestinationDatacollection">
        <div className="DestinationImages">
          <div className="getImage">
            <img src={image } alt="b"></img>
            <input
              type="file"
              name="inputimage"
              className="inputimage"
              onChange={setImageInImg}
              title="click image to change image "
              onFocus={props.onFocus}
            ></input>
            <p onClick={viewImageInImg}>view</p>
          </div>
          <div className="getImage">
            <img src={image2} alt="b"></img>
            <input
              type="file"
              name="inputimage"
              className="inputimage"
              onChange={setImageInImg2}
              title="click image to change image "
              onFocus={props.onFocus}
            ></input>
            <p onClick={viewImageInImg2} id="view" name="view">view</p>
          </div>
        </div>
      
        <div className=" destinationTexts ">
        <h2 className={"text-underline"}>Destination Description </h2>
          <div className="getTexts">
         
            <div className="formcomponent">
              <textarea
                name="Gedeuffa"
                placeholder="Your Gedeuffa Discrpition "
                onFocus={props.onFocus}
              ></textarea>
              <textarea
                name="Amaharic"
                placeholder="Your Amaharic Discrpition "
                onFocus={props.onFocus}
              ></textarea>
             
            </div>
            <div className="formcomponent">
            <textarea
                name="Description"
                placeholder="Your English Discrpition "
                onFocus={props.onFocus}
              ></textarea>
              {" "}
             <div> <input
                type="text"
                placeholder="Destination Name"
                name="Heading"
                onFocus={props.onFocus}
              ></input>
                <p className="errormsg" style={{color:props.Messagecolor}}>{props.msg}</p> 
              <button className="btn">Save</button></div>
            </div>
          </div>
        </div>
      </div> </>
      );
  }
 
   
  
}
export default AddDetinationData