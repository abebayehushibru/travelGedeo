import "./footer.css";
import { Link } from 'react-router-dom';

function Footer() {

  
  return (
    <>
      <div className="footer">
        <div className="top">
          <div>
            <h2>Travel Gedeo</h2>
            <p>Visit Your Favorite Destination</p>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h4>Web Links</h4>
            <Link to="/">
              <i className=""></i> Home
            </Link>
            <Link to="/About">
              <i className=""></i> About
            </Link>
            <Link to="/Contact">
              <i className=""></i> Contact
            </Link>
          </div>
          <div>
            <h4>Address</h4>
            <div></div>
            <a href="tel:+251 964 799 523">
              <i className="fa-solid fa-phone "></i>+251 964 799 523
            </a>
            <a href="mailto: @gmail.com">
            <i className="fa fa-envelope" aria-hidden="true"></i> abeaba64@gmail.com
            </a>
            <a href="https://goo.gl/maps/SoXDTEcf88gYAwW39">
            <i className="fas fa-map-marker-alt" aria-hidden="true" 
            ></i> Dilla Ethiopia
            </a>
          </div>
          <div>
          <h4>Social media</h4>
          <div id="Social-link">
          <a href="https://www.facebook.com/abebayehu.shibru.9" >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://t.me/abebawush">
              <i className="fab fa-telegram-plane"></i>
            </a>
            <a href="https://instagram.com/abebayehushibru?igshid=OGQ5ZDc2ODk2ZA==">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
            
          </div>
        </div>
        <p id="owner">  &copy;  2023  Developed By <a href="/">Ahavah SWD </a></p>
     
      </div>
      </>
  );
}
export default Footer;
