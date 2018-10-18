import React, { Component } from "react";
import uuid from "uuid";

import Message from "./message/message";
import "./messages.css";

class Messages extends Component {
  state = {
    messages: [
      {
        id: uuid(),
        from: "Andy",
        subject: "Horses",
        body: "I like horses"
      },
      {
        id: uuid(),
        from: "Jenna",
        subject: "Socks",
        body: "Fresh socks after a rainy hike."
      },
      {
        id: uuid(),
        from: "Alvin",
        subject: "Not afraid",
        body: "I'm not afraid of Pizza"
      },
      {
        id: uuid(),
        from: "Chris",
        subject: "Steaks",
        body: "Steaks should be cooked medium rare"
      },
      {
        id: uuid(),
        from: "Will",
        subject: "Good day",
        body: "The weather is great today"
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
          from={message.from}
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
