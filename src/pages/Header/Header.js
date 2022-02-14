import React, { useContext } from "react";
import "././header.css";
import { ThemeContext } from "../../App";
import SwitchButton from "../../components/SwitchButton/SwitchButton";

const Header = ({ onDragDrip }) => {
  const theme = useContext(ThemeContext);

  return (
    <header>
      <div className={"header-container-" + theme}>
        <div className={"header-title-" + theme}>Ercan Er</div>
        <div
          style={{
            marginLeft: "auto",
            justifySelf: "flex-end",
            marginRight: "10px",
          }}
        >
          <SwitchButton onClickSlider={onDragDrip} />
        </div>
        {/* <nav className="main-nav">
            <a href="/html/">HTML</a>
            <a href="/css/">CSS</a>
            <a href="/js/">JavaScript</a>
            <a href="/python/">Python</a>
          </nav> */}
      </div>
    </header>
  );
};

export default Header;
