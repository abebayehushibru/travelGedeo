import TripData from "./TripData";

import axios from "axios";
import { useState, useEffect } from "react";
import DestinationData from "./destinationdata";
function SetData(props) {
  const setscreenImage = (image) => {
    props.DoIt(image);
  };
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios
      .post("/getData", { from: props.from })
      .then((response) => {
        setDatas(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

 
  if (props.from === "trip") {
    const Dataslice = datas.slice(
      Number(props.Current),
      Number(props.Current + 3)
    );

    if (datas.length <= props.Current + 3) {
      props.DoItBTn(true);
    } else {
      props.DoItBTn(false);
    }

    return (
      <>
        {Dataslice.map((trip, index) => (
          <TripData
            index={index + props.Current}
         
            image={trip.img}
            header={trip.Header}
            content={trip.description}
            DoIt={setscreenImage}
            delay={(trip.index % 3) * 0.5 + 0.4 + "s"}
          />
        ))}
      </>
    );
  }
  if (props.from === "destination") {
    const Dataslice = datas.slice(
      Number(props.Current),
      Number(props.Current + 2)
    );
    if (datas.length <= props.Current + 2) {
      props.DoItBTn(true);
    } else {
      props.DoItBTn(false);
    }
   

    return (
      <>
        {Dataslice.map((trip,index) => (
   
          <DestinationData
            index={index}
         
            heading={trip.Header}
            defaultln="English"
            Gedeuffa={trip.gedeuffa}
            English={trip.English}
            Amaharic={trip.amaharic}
            img1={trip.img1}
            img2={trip.img2}
           
            DoIt={setscreenImage}
          />
      
         
        ))}
      </>
    );
  }
}

export default SetData;
