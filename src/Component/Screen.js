
const Screen = ( props ) => {
  
 const myfun =( event) => {
    if (event.target!==document.getElementById("image")) {
     
     props.DoIt()
    }}
  

 

  return (
    <>
      <div className={props.cName} id="screen" onClick={myfun} >
        <button onClick={props.DoIt}>
          <i className="fa fa-times" aria-label="x"></i>
        </button>
        <div>
         
         <div> <img src={props.img} alt='view' id="image" ></img></div>
        
        </div>
      </div>
    </>
  );
};

export default Screen;