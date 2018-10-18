import React, { Component } from "react";

import "./message.css";

class Message extends Component {
  state = {
    expanded: false,
    reply: false
  };

  expandMessage = () => {
    if (this.state.reply === true) {
      this.setState({
        reply: false
      });
    }
    this.setState({
      expanded: !this.state.expanded
    });
  };

  expandReply = () => {
    if (this.state.expanded === false) {
      this.expandMessage();
    }
    this.setState({
      reply: true
    });
  };

  handleArchiveMessage = () => {
    this.props.archiveMessage(this.props.id);
    this.setState({
      expanded: false,
      reply: false
    });
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
            <button className="message__reply" onClick={this.expandReply}>
              Reply
            </button>
            <button
              className="message__archive"
              onClick={this.handleArchiveMessage}
            >
              Archive
            </button>
            <button className="message__expand" onClick={this.expandMessage}>
              Expand
            </button>
          </div>
        </div>
        <div className="message__body">
          <div className="message__body__text">{props.body}</div>
          <div
            className="message__body__replyText"
            style={state.reply ? { display: "grid" } : {}}
          >
            <textarea />
            <button className="send">Send</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Message;
