import React from "react";
import "./styles.css";

export default function Footer() {
  return (
    <div className="Footer">
      This project was coded by
      <a href="https://github.com/MarinaPerezR" rel="noreferrer" target="_blank">
        <strong> Marina P.R.</strong>
      </a>
      , is open-sourced on
      <a href="https://github.com/MarinaPerezR/react-weather-app" rel="noreferrer" target="_blank">
        {" "}
        GitHub{" "}
      </a>
      and hosted on
      <a href="https://marina-weather-app.netlify.app/" rel="noreferrer" target="_blank">
        {" "}
        Netlify{" "}
      </a>
      .
    </div>
  );
}