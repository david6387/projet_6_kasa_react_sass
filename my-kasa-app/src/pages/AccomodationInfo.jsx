import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Tags from "../components/Tags";
import ImageSlider from "../components/ImageSlider";
import Collapse from "../components/Collapse";
import Rate from "../components/Rate";
import ErrorPage from "./ErrorPage";
import { useAccomodations } from "../contexts/AccomodationContext";

export default function AccomodationInfo() {
  let { pageId } = useParams();
  const navigate = useNavigate();
  const accomodations = useAccomodations()
  console.log(accomodations);


  const logementData = accomodations.find((logement) => pageId === logement.slug)
  // const beforeRender =()=> {
  //   setLogementData(logements.find((logement) => pageId === logement.slug))
  //   console.log(logementData);
  //   if (!logementData) {
  //     navigate("/error")
  //   }
  // }
  // // beforeRender()
  // useEffect(() => {
  //   setLogementData(logements.find((logement) => pageId === logement.slug))
  //   console.log(logementData);
  //   if (!logementData) {
  //     navigate("/error")
  //   }
  // }, [logementData, pageId, navigate, logements])
  
  if (!logementData) {
    return <ErrorPage/>
  }
  // const tagsData = logementData.tags;
  // const equipmentsData = logementData.equipments
  // const slides = logementData.pictures
  // const alt = logementData.title
  
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
