import React from "react";

import "./day.css";

const Day = props => {
  const setWeather = weather => {
    switch (weather) {
      case "Clear":
        return <i class="far fa-sun" style={{ color: "#fffa13" }} />;
      case "Clouds":
        return <i class="fas fa-cloud" style={{ color: "#656565" }} />;
      case "Rain":
        return <i class="fas fa-umbrella" style={{ color: "#171515" }} />;
      case "snow":
        return <i class="fas fa-snowflake" style={{ color: "#efefef" }} />;
      default:
        return weather;
    }
  };

  return (
    <div className="day">
      <div className="day__date">
        {props.date}
        hr
      </div>
      <div className="day__temp">
        {props.dayTemp}
        &#176;
      </div>
      <div className="day__weatherSymbol">{setWeather(props.weather)}</div>
    </div>
  );
};

export default Day;
