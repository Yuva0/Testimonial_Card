import React from "react";
import profileImg from "../../assets/logo192.png";

import "./Card.css";

const Card = () => {
  return (
    <div className="card-container" tabIndex={0}>
      <div className="card-profile">
        <img src={profileImg} alt="Profile" />
        <div className="card-name-tag">
          <div className="card-name">Sarah Dole</div>
          <div className="card-tag">@sarahdole</div>
        </div>
      </div>
      <div className="card-description">
        I've been searching for high-quality abstract images for my design
        projects, and I'm thrilled to have found this platform. The variety and
        depth of creativity are astounding! 
      </div>
    </div>
  );
};

export default Card;
