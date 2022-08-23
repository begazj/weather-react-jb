import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="crystal-ball shadow">
        <div className="fade-in-text">
          <div className="row current-temp">
            <div className="col">
              <div className="clearfix">
                <WeatherIcon code={props.data.icon} size={52} />
                <WeatherTemperature celsius={props.data.temperature} />
              </div>
            </div>
          </div>
          <h2>{props.data.city}</h2>
          <ul className="weather-description">
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
