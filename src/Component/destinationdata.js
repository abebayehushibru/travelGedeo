import { useState } from "react";
import "./destination.css";

function DestinationData(props) {
 const   setscreenImage=(image)=>{
    props.DoIt(image);
   
  }
  
 const [message ,setMessage]= useState(props.English)
 const [defaultln ,setdefaultln]= useState(props.defaultln)
   
  
const  handleChange=(e)=>{
    
    if (e.target.value==="Gedeuffa") {
    setdefaultln("Gedeuffa")
   setMessage(props.Gedeuffa)
    }
    else if (e.target.value==="English") {
      setdefaultln("English")
      setMessage(props.English)
    } 
    else {
      setdefaultln("Amaharic")
      setMessage(props.Amaharic)
    }
  }
 
 
    return (
        <>
      <div className={props.index%2===0?"first-des":"first-des-reverse"} data-aos={props.index%2===0?"":"fade-up" } key={props.index} >
        <div className="des-text">
          <h3>{props.heading} </h3>
          <p>{message}</p>
          <div>
          
            <div className="translation" style={{marginTop:"20px"}}>
           
             
              <select defaultValue={defaultln} onChange={handleChange}>
              <option value="English"  >English</option>
                <option value="Gedeuffa" >Gedeuffa</option>
                <option value="Amaharic" >Amaharic</option>
              
              </select>
              <span></span>
              <button  >
                {" "}
                translate to
              </button>
             
             
            </div>
          </div>
        </div>
        <div className="image"  >
          <img src={props.img1} alt="imagde" onClick={setscreenImage.bind(this, props.img1)}   />
          <img src={props.img2} alt="imadge" onClick={setscreenImage.bind(this, props.img2)}/>
        </div>
        
      </div>
     
    </>
    );
  }



export default DestinationData;