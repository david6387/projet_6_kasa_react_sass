import React from "react";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";

export default function About({ test }) {
  console.log(test);
  return (
    <>
      <Banner />
      <Collapse />
      <div className="about"></div>
    </>
  );
}
