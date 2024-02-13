import "./App.css";
import React, {useState,useEffect} from "react";
import imagehero1 from "./asserts/iconic1.jpg"
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Forget from "./routes/forget";
import Contact from "./routes/Contact";
import About from "./routes/About";
import Screen from "./Component/Screen";
import AdminSide from "./Component/adminside";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const [imagehero, setImage] = useState(imagehero1);
 
  const [className, setClassName] = useState('screen');

  const setscreenImage=(image)=>{
    setImage(image);
    setClassName( 'screen showscreen');
  
  }
  
 
  const handclickedclear = () => {
    
    setClassName('screen'  );
  };
  return (
    <div className="App">
    
      <Routes>
        <Route path="/" element={<Home DoIt={setscreenImage} />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/forget" element={<Forget  from={"admin"} />}></Route>
        <Route path="/admin" element={<AdminSide  DoIt={setscreenImage} />}></Route>
      </Routes>
      <Screen img={imagehero}  DoIt={handclickedclear} cName={className}></Screen>
    </div>
  );
}

export default App;
