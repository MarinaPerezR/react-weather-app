import React from "react";
import "./styles.css";

export default function Main() {
  return (
    <div className="Main">
      <div className="weather-app-data">
        <div className="weather-app-left-panel">
          <h1 className="weather-app-city" id="city">
            London
          </h1>
          <p className="weather-app-details">
            <span className="actual-day" id="time">
              Saturday
            </span>
            , <span id="description">clear sky</span>
            <br />
            Humidity: <strong id="humidity">30%</strong>, Wind:
            <strong id="speed"> 20 km/h</strong>
          </p>
        </div>
        <div className="weather-app-temperature-container">
          <div id="icon"></div>
          <div className="weather-app-temperature" id="temperature">
            10
          </div>
          <div className="weather-app-unit">°C</div>
        </div>
      </div>
      <div className="weather-forecast" id="forecast"></div>
    </div>
  );
}