import React from "react";
import { default as github } from "../assets/img/svg/github-svg.svg";
import { default as instagram } from "../assets/img/svg/instagram-svg.svg";
import { default as twitter } from "../assets/img/svg/twitter-svg.svg";
import "./icon.css";

const iconMap = {
  github: github,
  instagram: instagram,
  twitter: twitter,
};

const IconComponent = ({ iconName, id }) => {
  return (
    <div>
      <div className="icon-container">
        <div id={id} className="icon-item">
          <a href="https://www.google.com" className="icon-link">
            <img src={iconMap[iconName]} alt="icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default IconComponent;
