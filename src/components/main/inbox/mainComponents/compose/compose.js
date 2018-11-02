import React, { Component } from "react";

import "./compose.css";

class Compose extends Component {
  state = {
    messageOpen: false,
    messageSent: false,
    inputValue: "",
    textValue: ""
  };

  handleInput = e => {
    this.setState({
      inputValue: e.target.value
    });
  };

  handleText = e => {
    this.setState({
      textValue: e.target.value
    });
  };

  openMessage = () => {
    this.setState({
      messageOpen: true,
      messageSent: false
    });
  };

  sendMessage = e => {
    e.preventDefault();
    this.setState({
      messageOpen: false,
      messageSent: true,
      inputValue: "",
      textValue: ""
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
            <input
              className="recipient__input"
              onChange={this.handleInput}
              value={state.inputValue}
              maxlength="50"
            />
          </div>
          <form action="" method="post" className="compose__messageBody__form">
            <textarea
              className="compose__messageBody__form__message"
              onChange={this.handleText}
              value={state.textValue}
              maxlength="2000"
            />
            <button
              type="submit"
              className="compose__messageBody__form__send"
              onClick={this.sendMessage}
            >
              Send
            </button>
          </form>
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
