import React, { Component } from "react";
import Avatar from "./avatar/avatar";

import "./box.css";

class Box extends Component {
  state = {
    isOpen: this.props.isOpen
  };

  render() {
    const isOpen = this.state.isOpen;
    const id = this.props.id;
    const content = this.props.content;

    return (
      <div
        id={id}
        className="box"
        style={isOpen ? { height: "220px" } : { height: "50px" }}
      >
        <div
          className="label"
          style={isOpen ? { display: "none" } : { display: "block" }}
        >
          {content}
        </div>
        <Avatar isOpen={isOpen} content={content} />
      </div>
    );
  }
}

export default Box;
