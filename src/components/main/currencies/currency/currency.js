import React, { Component } from "react";

import "./currency.css";

class Currency extends Component {
  state = {};

  render() {
    const { props } = this;
    return (
      <div className="currency">
        <div className="currency__type">{props.type}</div>
        <div className="currency__value">{props.value}</div>
      </div>
    );
  }
}

export default Currency;
