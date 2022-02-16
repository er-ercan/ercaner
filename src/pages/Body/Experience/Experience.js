import React from "react";
import Card from "../../../components/Card/Card";
import "./experience.css";
import javascript from "../../../assets/img/javascript.png";
import csslogo from "../../../assets/img/csslogo.png";

const Experience = () => {
  return (
    <div className="experience-container">
      <Card
        header="Javascript"
        text="hello text"
        altTag="javascript"
        imgSrc={javascript}
      />
      <Card
        header="React"
        text="hello text"
        altTag="react"
        imgSrc={javascript}
      />
      <Card header="Css" text="hello text" altTag="css" imgSrc={csslogo} />
    </div>
  );
};

export default Experience;
