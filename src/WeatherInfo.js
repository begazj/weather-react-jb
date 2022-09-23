import React, { useState, useEffect } from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    setAnimate(false);
    setTimeout(() => {
      setAnimate(true);
    }, 400);
  }, [props.data.city]);

  return (
    <div className="WeatherInfo">
      <div className="crystal-ball">
        {!animate ? (
          <div className="loading-phrase">Calling the Universe</div>
        ) : (
          <div className={`fade-in-text`}>
            <div className="row current-temp">
              <div className="col">
                <div className="clearfix">
                  <WeatherIcon
                    code={props.data.icon}
                    size={48}
                    className="weather-icon"
                  />
                  <WeatherTemperature celsius={props.data.temperature} />
                </div>
              </div>
            </div>
            <h1>{props.data.city}</h1>
            <ul className="weather-description">
              <li>
                <FormattedDate date={props.data.date} />
              </li>
              <li className="text-capitalize">{props.data.description}</li>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {props.data.wind} km/h</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
