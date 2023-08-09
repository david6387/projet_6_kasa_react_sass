import React from "react";
import { useParams } from "react-router-dom";
import Logements from "../data/logements.json";
import Tags from "../components/Tags";

export default function AccomodationInfo() {
  let { pageId } = useParams();
  const logementData = Logements[pageId];
  console.log(logementData);
  return (
    <>
      <img
        className="carousel"
        src={logementData.pictures[0]}
        alt={logementData.title}
      />
      <div className="accomodation-info">
        <div>
          <h1>{logementData.title}</h1>
          <h2>{logementData.location}</h2>
          <Tags />
        </div>
        <div className="host-id">
          <p>{logementData.host.name}</p>
          <img
            src={logementData.host.picture}
            alt={`Portrait de $logementData.host.name`}
          />
        </div>
      </div>
    </>
  );
}
