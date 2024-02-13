import Destination from "../Component/Destination";
import Navbar from "../Component/Navbar";
import Hero from "../Component/hero";
import Trip from "../Component/Trip";
import Footer from "./Footer";
import imagehero from "../asserts/iconic.jpg"
function Home(props) {
    const setscreenImage=(image)=>{
        props.DoIt(image);
       
      }
    return(
     
        <>
           <Navbar from="home" />
        <Hero 
        cName="hero"
        image={imagehero}
        title="Your Journey Your Story"
        text="Visit Your Favorite Destination"
        btnText="Travel Gedeo"
        btnClass="show"
        />
        <Destination Doit={setscreenImage} DoIt={setscreenImage} />
        <Trip Doit={setscreenImage} DoIt={setscreenImage} ></Trip>
        <Footer></Footer>
         </>
    )
    
}
export default Home;