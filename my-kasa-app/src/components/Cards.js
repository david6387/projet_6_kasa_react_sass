import Logements from "./logements.json";
// import { NavLink } from "react-router-dom";

export default function Cards() {
  return (
    <div className="cards">
      {Logements &&
        Logements.map((logement) => {
          return (
            <div className="card" key={logement.id}>
              <div className="image-container">
                <img src={logement.cover} alt={logement.title} />
                {/* <NavLink to=""> */}
                <div className="overlay">
                  <figcaption>{logement.title}</figcaption>
                </div>
                {/* </NavLink> */}
              </div>
            </div>
          );
        })}
    </div>
  );
}
