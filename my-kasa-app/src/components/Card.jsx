import React from "react";

const Card = ({ img, title }) => {
  return (
    <div className="card">
      <div className="image-container">
        <img src={img} alt={title} />
        {/* <Link> */}
        <div className="overlay">
          <figcaption>{title}</figcaption>
        </div>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default Card;
