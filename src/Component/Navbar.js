import { useState } from "react";
import { menuItems } from "./menuItems";
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar(props) {
  const [clicked, setClicked] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);

  const handclicked = () => {
    setClicked(!clicked);
  };
 const liksactive =["home","about","contact"]
  
  window.onclick=function (e) {
    if (e.target1!==document.querySelector("nav")) {
      
    }
  }

  window.onscroll = function () {
    const currentScrollPos = window.pageYOffset;
    setClicked(false);
    if (currentScrollPos > prevScrollpos) {
      setVisible(false);
     
   ;
    } else {
      
      setVisible(true);
        
         

    }
    setPrevScrollpos( currentScrollPos );
    
  };

    return (
      <>
        <nav className={!visible?"navbarItems moveup":"navbarItems"}>
          <Link to="/" className="nav-logo"  key="logo"><h1>Travel Gedeo</h1></Link>
          <div className="menu-btns" onClick={handclicked}>
            <i
              className={clicked ? "fa fa-times" : "fa-solid fa-bars"}
            ></i>
          </div>
          <ul className={clicked ? "nav-menu active " : "nav-menu "}>
            {menuItems.map((items, index) => {
              return (
              <> <li key={index}>
                  <Link to={items.url} className={liksactive[index]===props.from ? items.cName + " active":items.cName }>
                    <i className={items.icon}> </i> {items.title}
                  </Link>
                </li>
                
              </> 
              );
            })
            
           
            }

            
              <li key={4}>
              <Link to="" className={props.from==="admin" ? " nav-link active admin" :"not-admin"} > Admin</Link>
            </li> 
            
          </ul>
        </nav>
      </>
    );
  
}
export default Navbar;
