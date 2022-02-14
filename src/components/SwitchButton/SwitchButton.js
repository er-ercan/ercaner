import React, { useState } from "react";
import "./SwitchButton.css";

const SwitchButton = ({ onClickSlider }) => {
  return (
    <div className="switch-container">
      <label class="switch">
        <input type="checkbox" onClick={onClickSlider} />
        <span class="slider round"></span>
      </label>
    </div>
  );
};

export default SwitchButton;
