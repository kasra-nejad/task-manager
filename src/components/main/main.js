import React, { Component } from "react";

import Home from "./home/home";
import Inbox from "./inbox/inbox";
import Calendar from "./calendar/calendar";
import Contacts from "./contacts/contacts";

import "./main.css";

class Main extends Component {
  state = {};

  render() {
    return (
      <div className="main">
        {/* <Home /> */}
        {/* <Inbox /> */}
        {/* <Calendar /> */}
        <Contacts />
      </div>
    );
  }
}

export default Main;
