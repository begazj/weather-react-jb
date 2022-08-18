import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather shadow">
      <div className="container">
        <div className="box with-linear-gradient">
          <h1>Weather Readings</h1>
          <div className="crystal-ball shadow">
            <div className="fade-in-text">
              <div className="row current-temp">
                <div className="col">
                  <div className="clearfix">
                    <img
                      src=" https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                      alt="Sunny"
                    ></img>
                    <span className="temperature">6</span>
                    <span className="unit">°C</span>
                  </div>
                </div>
              </div>
              <ul className="weather-description">
                <li>Wedensday 12:13</li>
                <li>Sunny</li>
                <li>Preciptation: 15%</li>
                <li>Humidity: 15%</li>
                <li>Wind: 13 km/h</li>
              </ul>
            </div>
          </div>
          <form className="d-flex">
            <div className="row m-1">
              <div className="col-6">
                <input
                  type="search"
                  placeHolder="Enter a city..."
                  className="form-control"
                  autoFocus="on"
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="submit-button btn btn-primary w-100"
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Current"
                  className="current-button btn btn-primary w-100"
                />
              </div>
            </div>
          </form>
          <hr />
          <div className="row">
            <div className="col">
              <h2>New York</h2>
              <h4>Daily Guidance</h4>
            </div>
            <div>
              <FontAwesomeIcon icon="fa-star-and-crescent" />
              <FontAwesomeIcon icon="fa-solid fa-star" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
