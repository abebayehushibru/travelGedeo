import  { useState } from 'react';
import emailjs from '@emailjs/browser';

import {Link} from "react-router-dom"
function Forget(props) {

    const [emailAddress, setEmailAddress] = useState('abeaba491@gmail.com');
  const [confirmationCode, setConfirmationCode] = useState('11222');

  const handleSubmit = async () => {
    const response = await emailjs.send(
      'service_0me9iwe',
      'template_0quvy89',
      {
        emailAddress,
        confirmationCode,
      }
    );

    if (response.status !== 200) {
      throw new Error('Failed to send confirmation code email');
    } else {
      alert('Confirmation code email sent!');
    }
  };

    const deleteError=()=>{
        setMessage("");
     }
    let [msg,setMessage]=useState ("")
    if (props.from=="admin") {
        return (<>
            <form className="logInform" onSubmit={handleSubmit}
            >
                        <div className="form formcomponent">
                            <h2>Forget passord</h2>
                        <input type="text" placeholder="User Name" name="user_name" onFocus={deleteError} style={{display:"none"}}></input>  
                        <input type="text" placeholder="enter Verification code" name="verify" onFocus={deleteError} style={{display:""}}></input> 
                      
                        <input type="password" placeholder="Password" name="password" onFocus={deleteError}style={{display:"none"}}></input> 
                      
                        <p className="errormsg" style={{color:"red"}}>{msg}</p> 
                             <button type="submit" className="btn">forget</button>
                             <Link to="/"> {"<< "}back</Link>
                        </div>
                        
                     </form>
            
                </>)  
    }
   
}
export default Forget