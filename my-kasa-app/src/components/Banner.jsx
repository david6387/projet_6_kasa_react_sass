import React from "react";

export default function Banner({ img, title, className, ...rest}) {
  return (
    <div className={`banner ${className ? className : ""}`} {...rest}>
      <img src={img} alt="Côte escarpée avec mer et falaises" />
      <div className="overlay">{!title ? "" : <h1>{title}</h1>}</div>
    </div>
  );
}
