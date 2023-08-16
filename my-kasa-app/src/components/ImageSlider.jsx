import {React, useState} from "react";

export default function ImageSlider({ slides }) {
  const [currentPicture, setCurrentPicture] = useState(0)

  function handlePrevClick() {
    if (currentPicture === (0))  {
      return setCurrentPicture(slides.length - 1)
    }

    return setCurrentPicture(currentPicture - 1)
  }

  function handleNextClick() {
    if (currentPicture === slides.length - 1) {
      return setCurrentPicture(0)
    }

    return setCurrentPicture(currentPicture + 1)
  }

  return (
    <>
  <img src={slides[currentPicture]} alt="coco"/>
  <div className="overlay">
    <img src="https://david6387.github.io/projet_6_kasa_react_sass/my-kasa-app/src/images/arrow-back.png" onClick={handlePrevClick} alt="arrow previous"/>
    <img src="https://david6387.github.io/projet_6_kasa_react_sass/my-kasa-app/src/images/arrow-forward.png" onClick={handleNextClick} alt="arrow next"/>
    {slides.length > 1 && (
    <p className="currentImage">{currentPicture + 1}/{slides.length}</p>
    )}
  </div>
  </>
)}
