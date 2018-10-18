import React, { Component } from "react";
import uuid from "uuid";

import Message from "./message/message";
import "./messages.css";

class Messages extends Component {
  state = {
    messages: [
      {
        id: uuid(),
        to: "Jose",
        subject: "He's falling for it",
        body: "OMG, he actually believed the story."
      },
      {
        id: uuid(),
        to: "Jenna",
        subject: "Brunch",
        body: "Hey Jenn, would you like to meet up for brunch this week?"
      }
    ]
  };

  deleteMessage = removeId => {
    const { messages } = this.state;
    const updatedMessages = messages.filter(message => {
      return message.id !== removeId;
    });

    this.setState({
      messages: updatedMessages
    });
  };

  render() {
    const { messages } = this.state;

    const renderedMessages = messages.map(message => {
      return (
        <Message
          id={message.id}
          to={message.to}
          subject={message.subject}
          body={message.body}
          deleteMessage={this.deleteMessage}
        />
      );
    });
    return <div className="messages">{renderedMessages}</div>;
  }
}

export default Messages;
