import React, { Component } from "react";

import Tabs from "./tabs/tabs";
import Unread from "./mainComponents/unread/unread";
import Sent from "./mainComponents/sent/sent";
import Archive from "./mainComponents/archive/archive";
import "./inbox.css";

class Inbox extends Component {
  state = {};

  render() {
    return (
      <div className="inbox">
        <Tabs />
        {/* <Unread /> */}
        {/* <Sent /> */}
        <Archive />
      </div>
    );
  }
}

export default Inbox;
