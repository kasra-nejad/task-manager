import React, { Component } from "react";

import Hour from "./hour/hour";
import "./hours.css";

class Hours extends Component {
  state = {};

  render() {
    return (
      <div className="hours">
        <Hour />
      </div>
    );
  }
}

export default Hours;
