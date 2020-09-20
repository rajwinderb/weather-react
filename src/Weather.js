import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <h1 className="city" id="city">
        Rome
      </h1>
      <h2 className="temp-and-icon">
        <img
          src="http://openweathermap.org/img/wn/02d@2x.png"
          alt="few clouds"
          id="main-weather-icon"
        />
        <span className="now-temp" id="now-temp">
          25
        </span>
        <span className="c-f">
          <a href="/" id="celsius" className="active">
            °C
          </a>{" "}
          |{" "}
          <a href="/" id="fahrenheit">
            °F
          </a>
        </span>
      </h2>

      <h3>
        <span id="high-temp">26</span>°/<span id="low-temp">23</span>°
      </h3>

      <p>
        <span id="description">few clouds</span>
        <br />
        humidity: <span id="humidity">83</span> % <br />
        wind: <span id="wind">7</span>
        <span id="wind-units">km/h</span> <br />
      </p>
    </div>
  );
}
