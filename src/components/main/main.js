import React, { Component } from "react";

import Todos from "./todos/todos";
import Weather from "./weather/weather";
import Stocks from "./stocks/stocks";
import "./main.css";

class Main extends Component {
  state = {};

  render() {
    return (
      <div className="main">
        <Todos />
        <Weather />
        <Stocks />
      </div>
    );
  }
}

export default Main;
