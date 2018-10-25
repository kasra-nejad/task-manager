import React from "react";

import "./calendarMonths.css";

const CalendarMonths = props => {
  const handlePrevMonth = () => {
    props.prevMonth();
  };

  const handleNextMonth = () => {
    props.nextMonth();
  };

  return (
    <div className="calendarMonths">
      <div className="calendarMonths__prevMonth" onClick={handlePrevMonth}>
        Prev
      </div>
      <div className="calendarMonths__currentMonth">
        {props.currentMonthFormated}
      </div>
      <div className="calendarMonths__nextMonth" onClick={handleNextMonth}>
        Next
      </div>
    </div>
  );
};

export default CalendarMonths;
