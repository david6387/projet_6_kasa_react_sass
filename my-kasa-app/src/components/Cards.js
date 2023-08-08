import Logements from "./logements.json";

export default function Cards() {
  return (
    <div className="cards">
      {Logements &&
        Logements.map((logement) => {
          return (
            <div className="card" key={logement.id}>
              <div className="image-container">
                <img src={logement.cover} alt={logement.title} />
                <div className="overlay">
                  <figcaption>{logement.title}</figcaption>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
