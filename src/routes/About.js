import Navbar from "../Component/Navbar";
import Hero from "../Component/hero";
import imagehero from "../asserts/iconic1.jpg"
import Footer from "./Footer";
import AboutData from "../Component/AboutData";
function About() {
    return(
        <>
         <Navbar from="about"/>
         <Hero
        cName="hero-mid"
        image={imagehero}
        title="About"
       
        btnClass="hide"
        /> 
          <AboutData />
        <Footer></Footer>
        </>
        
    )
    
}
export default About;