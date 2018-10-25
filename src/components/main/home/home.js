import React from "react";

import Todos from "./todos/todos";
import Weather from "./weather/weather";
import Currencies from "./currencies/currencies";
import "./home.css";

const Home = props => {
  return (
    <div className="home">
      <Todos />
      <Weather />
      <Currencies />
    </div>
  );
};

export default Home;
