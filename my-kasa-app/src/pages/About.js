import React from "react";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import BannerAbout from "../images/montagne.png";

export default function About({ test }) {
  console.log(test);
  return (
    <>
      <Banner img={BannerAbout} />
      <Collapse />
      <div className="about"></div>
    </>
  );
}
