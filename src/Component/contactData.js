import "./Contactdata.css";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from "react";

function ContactData() {
let err=""
    let [msg,setMessage]=useState ("")
    let [colors,setColor]=useState ("")
    let [visibility,setvisibility]=useState ("visible")
    const [name, setName] = useState()
    const [Phone, setPhone] = useState()
    const [email, setEmail] = useState()
    const [Subject, setSubject] = useState()
    const [message, semessage] = useState()
    const [Address, setAddress] = useState()
    
  
    const resetForm = () => {
      setName("")
      setPhone("")
      setSubject("")
      setEmail("")
      semessage("")
      setAddress("")
    }

 
  const form = useRef();
  const sendEmail = (e) => {

    e.preventDefault();
 setvisibility("hidden")
    const formData = {
        name: e.target.user_name.value,
        email: e.target.user_email.value,
        phone: e.target.user_phone.value,
   user_address: e.target.user_address.value,
        user_subject: e.target.user_subject.value,
        message: e.target.message.value,
    };

    //Validate the form data
     if (formData.name.trim() === '') {
        err='Please enter your name';
       
    }

    else if (!validateEmail(formData.email)) {
        err='Please enter a valid email address';
       
    }
    
    else if (formData.phone.trim() === '') {
        err='Please enter your Phone Number';
       
    }
    else if (formData.user_address.trim() === '') {
        err='Please enter your Address';
       
    } 

    else if (formData.user_subject.trim() === '') {
        err='Please enter your Subject';
      
    }

    else if (formData.message.trim() === '') {
        err='Please enter your message';
       
    }

    if(err===""){
        try {
            emailjs.sendForm('service_0me9iwe', 'template_0quvy89', form.current, 'mPsq8IDI9mxFMS_Uu')
              .then((result) => {
                
                setMessage("Your message has sent");
                setColor("green")
                resetForm()
                setvisibility("visible")
                  
              }, (error) => {
                  console.log(e.target.user_name);
                  setMessage("Your message has not sent");
                  setColor("red")
                 
              });
        } catch (error) {
            console.log(error);
            setMessage("An error has occurred. Please try again later.");
            setColor("red")
        }
    }
    else{
        setMessage(err);
        setColor("red")
        setvisibility("visible")
    }

   
  };
 const deleteError=()=>{
    setMessage("");
 }

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }


 
  return (
    <>
     
        <div className="contactContainer"  data-aos="fade-up">
         
            
            <h3>Contact Us</h3>
         

          <form ref={form} onSubmit={sendEmail}>
            <div className="formcomponent">
              <div>
                <input type="text" placeholder="Your Name" name="user_name" value={name} onFocus={deleteError}></input>
                <input type="email" placeholder="Your Email" name="user_email" value={email} onFocus={deleteError}></input>
                <input type="text" placeholder="Your Phone" name="user_phone" value={Phone} onFocus={deleteError}></input>
                <input type="text" placeholder="Your Address" name="user_address" value={Address} onFocus={deleteError}></input>
               
              </div>
              <div>
              <input type="text" placeholder="Subject" name="user_subject" value={Subject} onFocus={deleteError}></input>
                <textarea name="message" placeholder="Your messsage" value={message} onFocus={deleteError}>

                </textarea>
              </div>
              {
                
              }
              <p className="errormsg" style={{color:colors}}>
                {
msg
                }
               
              </p>
       
              <button type="submit" className="btn" style={{visibility:visibility}}> Send message</button>
            </div>
          </form>
        </div>
   
    </>
  );
}
export default ContactData;
