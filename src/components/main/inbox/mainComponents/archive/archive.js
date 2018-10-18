import React, { Component } from "react";

import Messages from "./messages/messages";
import "./archive.css";

class Archive extends Component {
  state = {};

  render() {
    return (
      <div className="archive">
        <Messages />
      </div>
    );
  }
}

export default Archive;
