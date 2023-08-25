import React from "react";

const Card = ({ img, title }) => {
  return (
    <div className="card">
      <div className="image-container">
        <img src={img} alt={title} />
          <div className="overlay">
            <figcaption>{title}</figcaption>
          </div>
      </div>
    </div>
  );
};

export default Card;
