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
      <div className="accomodation-info">
        <img src={logementData.pictures[0]} alt={logementData.title} />
        <h1>{logementData.title}</h1>
        <h2>{logementData.location}</h2>
        <Tags />
      </div>
    </>
  );
}
