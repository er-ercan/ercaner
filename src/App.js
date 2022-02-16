import React, { useState } from "react";
import "./App.css";
import Experience from "./pages/Body/Experience/Experience";
import Mainpage from "./pages/Body/Mainpage/Mainpage";
import Header from "./pages/Header/Header";

export const ThemeContext = React.createContext("dark");

function App() {
  const [style, setStyle] = useState("dark");
  function toggleStyle() {
    setStyle((style) => (style === "light" ? "dark" : "light"));
  }
  return (
    <ThemeContext.Provider value={style}>
      <div className={"App" + style}>
        <Header onDragDrip={() => toggleStyle()} />
        <main className="main-container">
          <section className="section-profile-container">
            <Mainpage />
          </section>
          <section className="section-my-experience">
            <Experience />
          </section>
        </main>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
