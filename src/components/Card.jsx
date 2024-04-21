import React from "react";
import "./Card.css"; 
const Card = ({ imageUrl, text }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt="Card" className="card-image" />
      <div className="overlay">
        <p className="overlay-text">{text}</p>
      </div>
    </div>
  );
};

export default Card;

