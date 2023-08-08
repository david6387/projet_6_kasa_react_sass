import React from "react";
import Logements from "../data/logements.json";
import { Link } from "react-router-dom";

export default function Cards() {
  return (
    <div className="cards">
      {Logements &&
        Logements.map((logement, index) => {
          return (
            <div key={logement.id} className="card">
              <div className="image-container">
                <img src={logement.cover} alt={logement.title} />
                <Link to={`accomodation/${index}`}>
                  <div className="overlay">
                    <figcaption>{logement.title}</figcaption>
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
    </div>
  );
}
