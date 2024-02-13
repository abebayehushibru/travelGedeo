import Navbar from "../Component/Navbar";
import Hero from "../Component/hero";
import ContactData from "../Component/contactData";
import imagehero from "../asserts/iconic1.jpg"
import Footer from "./Footer";
function Contact() {
    return(
        <>
         <Navbar from="contact" />
         <Hero
        cName="hero-mid"
        image={imagehero}
        title="Contact"
       
        btnClass="hide"
        />
          <ContactData/> 
         <Footer></Footer> 
        </>
    )
    
}
export default Contact;