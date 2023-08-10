import React from "react";

export default function Banner({ img, title }) {
  return (
    <div className="banner">
      <div className="overlay">
        <img src={img} alt="" />
        {!title ? "" : <h1>{title}</h1>}
      </div>
    </div>
  );
}
