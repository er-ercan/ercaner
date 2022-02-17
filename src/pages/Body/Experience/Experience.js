import React from "react";
import Card from "../../../components/Card/Card";
import "./experience.css";
import javascript from "../../../assets/img/javascript.png";
import csslogo from "../../../assets/img/csslogo.png";
import reactlogo from "../../../assets/img/react.png";
import mobxlogo from "../../../assets/img/mobx.png";
import webpacklogo from "../../../assets/img/webpack.png";

const Experience = () => {
  return (
    <div className="main-experience-container">
      <div
        style={{
          color: "#fff",
          fontSize: "1.5rem",
          marginBottom: "1rem",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "100px",
        }}
      >
        My Coding World
      </div>
      <div className="experience-container">
        <Card
          header="Javascript"
          text="Javascript Experience in Front-End Development"
          altTag="javascript"
          imgSrc={javascript}
        />
        <Card
          header="React"
          text="React Information About Everything"
          altTag="react"
          imgSrc={reactlogo}
        />
        <Card header="Css" text="hello text" altTag="css" imgSrc={csslogo} />
        <Card header="MobX" text="hello text" altTag="mobx" imgSrc={mobxlogo} />
        <Card
          header="Webpack"
          text="hello text"
          altTag="webpack"
          imgSrc={webpacklogo}
        />
      </div>
    </div>
  );
};

export default Experience;
