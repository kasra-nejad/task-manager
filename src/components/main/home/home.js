import React, { Component } from "react";

import Todos from "./todos/todos";
import Weather from "./weather/weather";
import Currencies from "./currencies/currencies";
import "./home.css";

class Home extends Component {
  state = {};

  render() {
    return (
      <div className="home">
        <Todos />
        <Weather />
        <Currencies />
      </div>
    );
  }
}

export default Home;
