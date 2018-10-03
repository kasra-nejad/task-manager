import React, { Component } from "react";
import uuid from "uuid";

import Hour from "./hour/hour";
import "./hours.css";

class Hours extends Component {
  state = {
    hours: []
  };

  componentWillMount() {
    this.setHours();
  }

  setHours = () => {
    const hours = [];
    for (let i = 0; i < 24; i++) {
      hours.push({ hour: i, task: "Brrap", id: uuid() });
    }

    this.setState({
      hours: hours
    });
  };

  render() {
    const { hours } = this.state;
    const { id } = this.state.hours;
    const hourBlock = hours.map(hour => {
      return <Hour time={hour.hour} task={hour.task} key={id} id={id} />;
    });

    return <div className="hours">{hourBlock}</div>;
  }
}

export default Hours;
