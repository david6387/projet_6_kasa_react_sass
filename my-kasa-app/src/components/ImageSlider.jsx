import React from "react";

export default function ImageSlider({slides}) {
  return (
    <>
  <img src={slides} alt="coco"/>
  <div className="overlay">
    <img src="https://david6387.github.io/projet_6_kasa_react_sass/my-kasa-app/src/images/arrow-back.png" alt="arrow previous"/>
    <img src="https://david6387.github.io/projet_6_kasa_react_sass/my-kasa-app/src/images/arrow-forward.png" alt="arrow next"/>
  </div>
  </>
)}
