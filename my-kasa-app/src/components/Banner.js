import React from "react";

export default function Banner({ img, title }) {
  return (
    <div className="banner">
      <img src={img} alt="Côte escarpée avec mer et falaises" />
      <div className="overlay">{!title ? "" : <h1>{title}</h1>}</div>
    </div>
  );
}
