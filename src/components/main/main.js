import React, { Component } from "react";

import Todos from "./todos/todos";
import Weather from "./weather/weather";
import Currencies from "./currencies/currencies";
import "./main.css";

class Main extends Component {
  state = {};

  render() {
    return (
      <div className="main">
        <Todos />
        <Weather />
        <Currencies />
      </div>
    );
  }
}

export default Main;
