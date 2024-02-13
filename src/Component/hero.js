import "./hero.css"

function Hero(props) {
    return(
        <>
         
        <div  className={props.cName} data-aos="fade-up">
            <img src={props.image} alt="Image"></img>
            <div className="hero-text">
                <h1>{props.title} </h1>
                <p>{props.text}</p>
                <a className= {props.btnClass}> {props.btnText}</a>

            </div>
        </div>
        </>
    )
    
}
export default Hero;