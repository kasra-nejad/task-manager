import React, { Component } from "react";

import "./message.css";

class Message extends Component {
  state = {
    expanded: false
  };

  expandMessage = () => {
    this.setState({
      expanded: !this.state.expanded
    });
  };

  handleDeleteMessage = () => {
    this.props.deleteMessage(this.props.id);
  };

  render() {
    const { props } = this;
    const { state } = this;
    return (
      <div
        className="message"
        style={
          state.expanded
            ? { "min-height": "91%", transition: "all 300ms ease-out" }
            : { "min-height": "25%" }
        }
      >
        <div className="message__header">
          <div className="message__header__info">
            <div className="message__from">
              <span>From: </span>
              {props.from}
            </div>
            <div className="message__subject">
              <span>Subject: </span>
              {props.subject}
            </div>
          </div>
          <div className="message__header__actions">
            <button
              className="message__archive"
              onClick={this.handleDeleteMessage}
            >
              Delete
            </button>
            <button className="message__expand" onClick={this.expandMessage}>
              Expand
            </button>
          </div>
        </div>

        <div className="message__body">{props.body}</div>
      </div>
    );
  }
}

export default Message;
