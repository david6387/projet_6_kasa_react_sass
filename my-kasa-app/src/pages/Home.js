import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
// import Cards from "../components/Cards";
import BannerHome from "../images/mer.png";
import Card from "../components/Card";

export default function Home() {
  // les states et les variables (états, données)
  const [logements, setLogements] = useState([]);

  // les fonctions , les comportements
  useEffect(() => {
    fetch("./data/logements.json")
      .then((response) => response.json())
      .then((datas) => {
        console.log(datas);
        setLogements(datas);
      })
      .catch((error) => console.log(error));
  }, []);

  // render = rendu
  return (
    <>
      <Banner img={BannerHome} title="Chez vous, partout et ailleurs" />
      {/* <Cards> */}
      <div className="cards">
        {logements &&
          logements.map((logement) => (
            <Card
              key={logement.id}
              title={logement.title}
              img={logement.cover}
            />
          ))}
      </div>
      {/* </Cards> */}
    </>
  );
}
