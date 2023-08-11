import React from "react";

export default function Banner({ img, title }) {
  return (
    <div className="banner">
      <img src={img} alt="" />
      <div className="overlay">{!title ? "" : <h1>{title}</h1>}</div>
    </div>
  );
}
