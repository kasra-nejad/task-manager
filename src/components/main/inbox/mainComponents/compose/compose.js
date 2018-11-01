import React, { Component } from "react";

import "./compose.css";

class Compose extends Component {
  state = {
    messageOpen: false,
    messageSent: false
  };

  openMessage = () => {
    this.setState({
      messageOpen: true,
      messageSent: false
    });
  };

  sendMessage = () => {
    this.setState({
      messageOpen: false,
      messageSent: true
    });
  };

  render() {
    const { state } = this;
    return (
      <div className="compose">
        <div className="compose__actions">
          <button className="compose__actions__new" onClick={this.openMessage}>
            New Message
          </button>
        </div>
        <div
          className="compose__messageBody"
          style={state.messageOpen ? { display: "flex" } : {}}
        >
          <div className="compose__messageBody__recipient">
            <span className="recipient__text">Recipient:</span>
            <input className="recipient__input" maxlength="50" />
          </div>
          <textarea
            className="compose__messageBody__message"
            maxlength="2000"
          />
          <button
            className="compose__messageBody__send"
            onClick={this.sendMessage}
          >
            Send
          </button>
        </div>
        <p
          className="compose__sent"
          style={state.messageSent ? { display: "block" } : {}}
        >
          Message Sent!
        </p>
      </div>
    );
  }
}

export default Compose;
