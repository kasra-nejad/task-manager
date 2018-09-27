import React, { Component } from "react";

import "./hour.css";

class Hour extends Component {
  state = {};

  render() {
    return (
      <div className="hour">
        <div className="hour__time" />
        <div className="hour__task" />
      </div>
    );
  }
}

export default Hour;
