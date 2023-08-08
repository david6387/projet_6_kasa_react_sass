import Logements from "./logements.json";
// console.log();

export default function Cards() {
  return (
    <div className="cards">
      {Logements &&
        Logements.map((logement) => {
          return (
            <div key={logement.id}>
              <img src={logement.cover} alt={logement.title} />
              <figcaption>{logement.title}</figcaption>
            </div>
          );
        })}
    </div>
  );
}
