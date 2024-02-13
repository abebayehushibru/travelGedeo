import imagehero from "../asserts/iconic3.jpg"
import "./AboutData.css"
import { Link } from 'react-router-dom';
function AboutData() {
    return (<div className="container" data-aos="fade-up">
    <div>
        <img src={imagehero} alt="componyphoto"></img>

    </div>
    <div>
        <h3>Ahavah SWD</h3>
    <p>
    Addis Ababa, August 2, 2023 (FBC) Efforts are in progress to register the cultural landscape of the Gedeo Zone in Southern Nations Nationalities and Peoples’ Region (SNNPR) by the United Nations Educational, Scientific and Cultural Organization (UNESCO),
     said Gedeo Zone Department of Culture and Tourism.  
    

    </p>
    <Link to="/Contact" className="btn">
               Contact
            </Link>
    </div>
    
</div>)
    
}
export default AboutData;