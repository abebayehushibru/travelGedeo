
function TripData (props){
  const  setscreenImage=(e)=>{
 props.DoIt(e);
       
      }
     
     
        return (
            <>
            <div className="trip-card" key={props.index}  style={{animationDelay:props.delay} }>
                <div className="trip-image">
                    <img src={props.image} alt="Trip_Image"  onClick={setscreenImage.bind(this, props.image)}  >
    
                    </img>
                </div>
                <h3>{props.header} </h3>
                <p>{props.content}</p>
            </div>
            </>
        )
      }
   

export default TripData;