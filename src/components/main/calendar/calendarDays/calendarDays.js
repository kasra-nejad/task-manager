import React, { Component } from "react";

import CalendarDate from "./calendarDate/calendarDate";
import "./calendarDays.css";

class CalendarDays extends Component {
  state = {};

  render() {
    const displayedDates = [];
    let i = 0;

    while (i < 42) {
      displayedDates.push(<CalendarDate />);
      i++;
    }
    return <div className="calendarDays">{displayedDates}</div>;
  }
}

export default CalendarDays;
