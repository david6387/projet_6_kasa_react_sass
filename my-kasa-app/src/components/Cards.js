import Logements from "./logements.json";
// console.log();

export default function Cards() {
  return (
    <div className="cards">
      {Logements &&
        Logements.map((logement) => {
          return (
            <div key={logement.id}>
              {logement.title}
              <img src={logement.cover} alt={logement.title} />
            </div>
          );
        })}
    </div>
  );
}
