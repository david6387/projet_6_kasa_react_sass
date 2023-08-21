import {React, useState} from "react";
import ArrowBack from "../images/arrow-back.png";
import ArrowForward from "../images/arrow-forward.png";

export default function ImageSlider({ slides, alt }) {
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
  <img className="current-slide" src={slides[currentPicture]} alt={alt}/>
  <div className="overlay">
  {slides.length > 1 && (
    <>
    <img src={ArrowBack} onClick={handlePrevClick} alt="previous"/>
    <img src={ArrowForward} onClick={handleNextClick} 
    alt="next"/>
    <p className="currentImage">{currentPicture + 1}/{slides.length}</p>
    </>
    )}
  </div>
  </>
)}
