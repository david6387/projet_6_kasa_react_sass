import React from "react";
import { useParams } from "react-router-dom";
import Tags from "../components/Tags";
import ImageSlider from "../components/ImageSlider";
import Collapse from "../components/Collapse";
import Rate from "../components/Rate";
import { useAccomodations } from "../contexts/AccomodationContext";
import ErrorPage from "./ErrorPage";

export default function AccomodationInfo() {
  let { pageId } = useParams();
  const accomodations = useAccomodations()
  const logementData = accomodations.find((logement) => pageId === logement.slug)
    
  if (!logementData) {
    return <ErrorPage/>
  }
    
  return (
    <>
      <div className="carousel">
        <ImageSlider slides={logementData.pictures} alt={logementData.title}/>
      </div>
      <div className="accomodation-info">
        <div className="house-info">
          <h1>{logementData.title}</h1>
          <h2>{logementData.location}</h2>
            <ul className="tags">
              {logementData.tags && 
                logementData.tags.map((tagData, index) => (
                    <Tags key={index} title={tagData}/>
                  ))}
            </ul>
        </div>
        <div className="host-info">
          <div className="host">
            <p>{logementData.host.name}</p>
            <img
              src={logementData.host.picture}
              alt={`Portrait de ${logementData.host.name}`}/>
            </div>
          <div className="rate"><Rate rating={logementData.rating}/></div>
        </div>
      </div>
      <div className="details-collapse">
        <Collapse
        title="Description"
        description={logementData.description}
        />
        <Collapse
          title="Équipements"
          description={logementData.equipments}
        />
      </div>
    </>
  );
}
