import React from "react";
import { useParams } from "react-router-dom";
import Tags from "../components/Tags";
import ImageSlider from "../components/ImageSlider";

export default function AccomodationInfo({logements}) {
  let { pageId } = useParams();
  const logementData = logements[pageId];
  // console.log(logementData);
  return (
    <>
      <div>
        <ImageSlider />
      </div>
      {/* <img
        className="carousel"
        src={logementData.pictures[0]}
        alt={logementData.title}
      /> */}
      <div className="accomodation-info">
        <div className="house-info">
          <h1>{logementData.title}</h1>
          <h2>{logementData.location}</h2>
          <Tags logements={logements}/>
        </div>
        <div className="host-info">
          <p>{logementData.host.name}</p>
          <img
            src={logementData.host.picture}
            alt={`Portrait de ${logementData.host.name}`}
          />
        </div>
      </div>
    </>
  );
}
