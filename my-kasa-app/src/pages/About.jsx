import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import BannerAbout from "../images/montagne.png";

export default function About() {
  const [values, setValues] = useState([]);

  useEffect(() => {
    fetch("./data/values.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setValues(data);
      });
  }, []);

  return (
    <>
      <Banner img={BannerAbout} alt="Montagnes enneigées" />
      <div className="values-collapse">
        {values &&
          values.map((value) => (
            <Collapse
              key={value.id}
              title={value.name}
              description={value.description}
            />
          ))}
      </div>
    </>
  );
}
