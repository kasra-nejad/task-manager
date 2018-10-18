import React, { Component } from "react";

import CalendarMonths from "./calendarMonths/calendarMonths";
import CalendarDays from "./calendarDays/calendarDays";
import "./calendar.css";

class Calendar extends Component {
  state = {};

  render() {
    return (
      <div className="calendar">
        <CalendarMonths />
        <CalendarDays />
      </div>
    );
  }
}

export default Calendar;
