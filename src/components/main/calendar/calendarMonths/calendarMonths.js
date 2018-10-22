import React, { Component } from "react";
import dateFns from "date-fns";

import "./calendarMonths.css";

class CalendarMonths extends Component {
  handlePrevMonth = () => {
    this.props.prevMonth();
  };

  handleNextMonth = () => {
    this.props.nextMonth();
  };

  render() {
    return (
      <div className="calendarMonths">
        <div
          className="calendarMonths__prevMonth"
          onClick={this.handlePrevMonth}
        >
          Prev
        </div>
        <div className="calendarMonths__currentMonth">
          {this.props.currentMonthFormated}
        </div>
        <div
          className="calendarMonths__nextMonth"
          onClick={this.handleNextMonth}
        >
          Next
        </div>
      </div>
    );
  }
}

export default CalendarMonths;
