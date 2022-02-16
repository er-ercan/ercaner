import React from "react";
import "./card.css";

const Card = ({ imgSrc, altTag, header, text }) => {
  return (
    <div className="card-container">
      <div className="logo-container">
        <img className="logo-card" src={imgSrc} alt={altTag} />
      </div>
      <div className="card-title">
        <h3>{header}</h3>
      </div>
      <div className="card-text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Card;
