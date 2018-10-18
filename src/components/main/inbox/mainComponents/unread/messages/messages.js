import React, { Component } from "react";
import uuid from "uuid";

import Message from "./message/message";
import "./messages.css";

class Messages extends Component {
  state = {
    messages: [
      {
        id: uuid(),
        from: "Jimmy",
        subject: "The reports",
        body: "I need to have the reports on my desk by Monday"
      },
      {
        id: uuid(),
        from: "Joseph",
        subject: "Sunday's game",
        body: "Hey bud, are we still on for the game this Sunday?"
      },
      {
        id: uuid(),
        from: "Jenna",
        subject: "Brunch",
        body: "Sure, can meet up for Brunch on at Noon."
      },
      {
        id: uuid(),
        from: "Jose",
        subject: "Hahaha",
        body: "Lol, I can't believe Jim fell for that prank."
      }
    ]
  };

  archiveMessage = removeId => {
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
          archiveMessage={this.archiveMessage}
        />
      );
    });
    return <div className="messages">{renderedMessages}</div>;
  }
}

export default Messages;
