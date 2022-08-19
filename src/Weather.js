import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      temperature: response.data.main.temp,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
    });
  }

  function search() {
    const apiKey = "7606076d1271fb4e58f13d2dd877419c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather shadow-lg">
        <div className="container">
          <div className="box with-linear-gradient">
            <h1>Weather Readings</h1>
            <div>
              <WeatherInfo data={weatherData} />
            </div>
            <form onSubmit={handleSubmit} className="d-flex">
              <div className="row m-1">
                <div className="col-6">
                  <input
                    type="search"
                    placeHolder="Enter a city..."
                    className="form-control shadow-sm"
                    autoFocus="on"
                    onChange={handleCityChange}
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
    search();
    return "Calling the universe...";
  }
}
