import Banner from "../components/Banner";
import BannerHome from "../images/mer.png";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import { useAccomodations } from "../contexts/AccomodationContext";

export default function Home() {

  const accomodations = useAccomodations()

  return (
    <>
      <Banner className="home-banner" img={BannerHome} title="Chez vous, partout et ailleurs" />
      <div className="cards">
        {accomodations &&
          accomodations.map((logement) => (
            <Link key={logement.id} to={`accomodation/${logement.slug}`}>
              <Card title={logement.title} img={logement.cover} />
            </Link>
          ))}
      </div>
    </>
  );
}
