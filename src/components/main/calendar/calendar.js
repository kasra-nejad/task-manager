import React, { Component } from "react";
import dateFns from "date-fns";

import CalendarMonths from "./calendarMonths/calendarMonths";
import CalendarDays from "./calendarDays/calendarDays";
import "./calendar.css";

class Calendar extends Component {
  state = {
    currentMonth: new Date(),
    selectedDate: new Date()
  };

  nextMonth = () => {
    let nextMonth = dateFns.addMonths(this.state.currentMonth, 1);

    this.setState({
      currentMonth: nextMonth
    });
  };

  prevMonth = () => {
    let prevMonth = dateFns.subMonths(this.state.currentMonth, 1);

    this.setState({
      currentMonth: prevMonth
    });
  };

  render() {
    const monthFormat = "MMM YYYY";

    return (
      <div className="calendar">
        <CalendarMonths
          prevMonth={this.prevMonth}
          nextMonth={this.nextMonth}
          currentMonth={this.state.currentMonth}
          currentMonthFormated={dateFns.format(
            this.state.currentMonth,
            monthFormat
          )}
        />
        <CalendarDays
          currentMonth={this.state.currentMonth}
          selectedDate={this.state.selectedDate}
        />
      </div>
    );
  }
}

export default Calendar;
