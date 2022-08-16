import React from "react";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeHolder="Enter a city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn" />
          </div>
        </div>
      </form>
      <h1>Weather Readings</h1>
      <div className="row">
        <div className="col">
          <img
            src=" https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="Sunny"
          ></img>
          6°C
        </div>

        <ul>
          <li>Sunny</li>
          <li>Preciptation: 15%</li>
          <li>Humidity: 15%</li>
          <li>Wind: 13 km/h</li>
        </ul>
        <h2>New York</h2>
        <ul>
          <li>Wedensday 12:13</li>
        </ul>
      </div>
    </div>
  );
}
