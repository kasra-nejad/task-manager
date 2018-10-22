import React, { Component } from "react";

import "./calendarDate.css";

const CalendarDate = props => {
  return (
    <div
      className={props.sameMonth ? "calendarDate" : "calendarDate inactive"}
      style={
        props.selectedDate == props.dayOfYear
          ? {
              color: "#fff",
              fontSize: "2rem",
              textShadow: "rgb(3, 42, 1) 0px 0px 2px"
            }
          : {}
      }
    >
      {props.day}
    </div>
  );
};

export default CalendarDate;
