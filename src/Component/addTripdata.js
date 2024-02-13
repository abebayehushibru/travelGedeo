

import "./adminside.css";
import imagehero from "../asserts/insert-image-icon.png";

import  {  useState } from "react";
function AddTripData(props) {
  const [image, setImage] = useState(imagehero);
 
  
 
 const setImageInImg = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
      props.setImageFile(e.target.files[0])
     
    }
  };
  

  
  const viewImageInImg = (e) => {
    
    props.DoIt(image);
  }
  
  if(props.forwho==="Add Trip") {
    return (
        <>
             <div className="GetData">
                    <div className="getImage">
                        <img src={image==null?imagehero:image}  alt="b"></img>
                        <input type="file" name="inputimage" className="inputimage"  onChange={setImageInImg} title="click image to change image " onFocus={props.onFocus}></input>
                        <p onClick={viewImageInImg}>view</p>
                    </div>
                    <h3 className="discription-text">Trep Event Description</h3>
                    <div className="getText formcomponent">
                        <div >
                        <input type="text" placeholder="Heading" name="Heading" onFocus={props.onFocus}></input>   
                        </div>
                   
                    <textarea name="Description" placeholder="Your Description" onFocus={props.onFocus} ></textarea>

                    <p className="errormsg" style={{color:props.Messagecolor}}>{props.msg}</p> 
                    <button type="submit" className="btn">Save</button>
                    </div>
                </div> 
            
  
        </>
      )
  }
  
  
  

    }
export default AddTripData;