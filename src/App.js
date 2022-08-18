import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="Berlin" />

      <footer>
        This project was coded by Jen Begazo and is{" "}
        <a
          href="https://github.com/begazj/weather-react-jb"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced
        </a>{" "}
        on Github.
      </footer>
    </div>
  );
}
