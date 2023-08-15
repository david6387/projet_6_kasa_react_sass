import React from "react";
import { useParams } from "react-router-dom";
import Tags from "../components/Tags";
import ImageSlider from "../components/ImageSlider";
import Collapse from "../components/Collapse";
import Rate from "../components/Rate";

export default function AccomodationInfo({logements}) {
  let { pageId } = useParams();
  const logementData = logements.find((logement) => pageId === logement.slug)
  const tagsData = logementData.tags;
  const equipmentsData = logementData.equipments
  const slides = logementData.pictures
  // console.log(logementData.description);
  // console.log(logementData.equipments)
  // console.log(tagsData);
  // console.log(logementData);
  return (
    <>
      <div className="carousel">
        <ImageSlider slides={slides}/>
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
            <ul className="tags">
              {tagsData && 
                tagsData.map((tagData, index) => (
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
          description={equipmentsData}
        />
      </div>
    </>
  );
}
