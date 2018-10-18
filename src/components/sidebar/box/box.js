import React, { Component } from "react";

import "./box.css";

class Box extends Component {
  handleActivate = () => {
    this.props.activateBox(this.props.id);
  };

  render() {
    const { props } = this;
    const isActive = this.props.isActive;

    return (
      <div
        id={props.id}
        key={props.key}
        className="box"
        style={
          isActive
            ? { backgroundColor: "rgba(32, 65, 0, 0.747)", color: "#ccc" }
            : {}
        }
        onClick={this.handleActivate}
      >
        <div className="label" style={isActive ? { color: "#ccc" } : {}}>
          {props.content}
        </div>
      </div>
    );
  }
}

export default Box;
