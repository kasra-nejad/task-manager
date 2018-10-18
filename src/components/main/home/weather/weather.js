import React from "react";

import Days from "./days/days";
import "./weather.css";

const Weather = () => {
  return (
    <div className="weather">
      <Days />
    </div>
  );
};

export default Weather;
