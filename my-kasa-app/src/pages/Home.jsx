import Banner from "../components/Banner";
import BannerHome from "../images/mer.png";
import Card from "../components/Card";
import { Link } from "react-router-dom";

export default function Home({logements}) {

  return (
    <>
      <Banner img={BannerHome} title="Chez vous, partout et ailleurs" />
      <div className="cards">
        {logements &&
          logements.map((logement) => (
            <Link key={logement.id} to={`accomodation/${logement.slug}`}>
              <Card title={logement.title} img={logement.cover} />
            </Link>
          ))}
      </div>
    </>
  );
}
