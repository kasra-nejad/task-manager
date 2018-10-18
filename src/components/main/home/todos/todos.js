import React, { Component } from "react";

import Hours from "./hours/hours";
import "./todos.css";

class Todos extends Component {
  state = {};

  render() {
    return (
      <div className="todos">
        <Hours />
      </div>
    );
  }
}

export default Todos;
