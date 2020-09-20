import React, { useState } from 'react';
import axios from 'axios';

export default function Weather(){
    let [city, setCity] = useState("");
  let [weather, setWeather] = useState("");

  function showTemperature(response) {
    setWeather(
      <ul>
        <li>City: {city}</li>
        <li>Temperature : {Math.round(response.data.main.temp)} °C</li>
        <li>Description: {response.data.weather[0].description}</li>
        <li>Humidity: {response.data.main.humidity} %</li>
        <li>Wind: {response.data.wind.speed} km/h</li>
        <img
          src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
          alt="weather"
        />
      </ul>
    );
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "c1b241c9ee4ba5b2a6cffb1b36346f23";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(showTemperature);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a City…"
          onChange={updateCity}
        />
        <input type="submit" />
      </form>
      {weather}
    </div>
  );
}