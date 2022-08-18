import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      date: "Wednesday 07:00",
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather shadow-lg">
        <div className="container">
          <div className="box with-linear-gradient">
            <h1>Weather Readings</h1>
            <div className="crystal-ball shadow">
              <div className="fade-in-text">
                <div className="row current-temp">
                  <div className="col">
                    <div className="clearfix">
                      <img
                        src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                        alt="Sunny"
                      ></img>
                      <span className="temperature">
                        {Math.round(weatherData.temperature)}
                      </span>
                      <span className="unit">°C</span>
                    </div>
                  </div>
                </div>
                <h2>{weatherData.city}</h2>
                <ul className="weather-description">
                  <li>{weatherData.date}</li>
                  <li className="text-capitalize">{weatherData.description}</li>
                  <li>Humidity: {weatherData.humidity}%</li>
                  <li>Wind: {weatherData.wind} km/h</li>
                </ul>
              </div>
            </div>
            <form className="d-flex">
              <div className="row m-1">
                <div className="col-6">
                  <input
                    type="search"
                    placeHolder="Enter a city..."
                    className="form-control shadow-sm"
                    autoFocus="on"
                  />
                </div>
                <div className="col-3">
                  <input
                    type="submit"
                    value="Search"
                    className="submit-button btn btn-primary w-100 shadow-sm"
                  />
                </div>
                <div className="col-3">
                  <input
                    type="submit"
                    value="Current"
                    className="current-button btn btn-primary w-100 shadow-sm"
                  />
                </div>
              </div>
            </form>
            <hr />
            <div className="row">
              <div className="col">
                <h4>Daily Guidance</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "7606076d1271fb4e58f13d2dd877419c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Calling the universe...";
  }
}
