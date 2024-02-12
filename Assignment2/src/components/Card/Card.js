import React from "react";

const Card = ({ title, description, cardImage, ...props }) => {
  return (
    <div {...props}>
      <div className="card">
        <img className="card-img-top" src={cardImage} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
        <div className="card-body">
          <a href="#" className="card-link">
            Card link
          </a>
          <a href="#" className="card-link">
            Another link
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
