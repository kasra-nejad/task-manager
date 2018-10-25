import React from "react";
import dateFns, { isSameMonth } from "date-fns";

import CalendarDate from "./calendarDate/calendarDate";
import "./calendarDays.css";

const CalendarDays = props => {
  const { currentMonth, selectedDate } = props;
  const monthStart = dateFns.startOfMonth(currentMonth);
  const monthEnd = dateFns.endOfMonth(monthStart);
  const startDate = dateFns.startOfWeek(monthStart);
  const endDate = dateFns.endOfWeek(monthEnd);

  const rows = [];

  let days = [];
  let day = startDate;
  let formattedDate = "";
  let dayOfYearformated;
  let currentDayOfYearFormated;
  let sameMonth;

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = dateFns.format(day, "D");
      dayOfYearformated = dateFns.format(day, "DDD");
      currentDayOfYearFormated = dateFns.format(selectedDate, "DDD");
      sameMonth = isSameMonth(day, monthStart);
      days.push(
        <CalendarDate
          day={formattedDate}
          dayOfYear={dayOfYearformated}
          selectedDate={currentDayOfYearFormated}
          sameMonth={sameMonth}
        />
      );
      day = dateFns.addDays(day, 1);
    }
    rows.push(
      <div className="row" key={day}>
        {days}
      </div>
    );
    days = [];
  }
  return <div className="displayedDays">{rows}</div>;
};

export default CalendarDays;
