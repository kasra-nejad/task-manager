import React, { Component } from "react";

import Messages from "./messages/messages";
import "./sent.css";

class Sent extends Component {
  state = {};

  render() {
    return (
      <div className="sent">
        <Messages />
      </div>
    );
  }
}

export default Sent;
