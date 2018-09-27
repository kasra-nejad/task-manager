import React, { Component } from "react";
import uuid from "uuid";

import Box from "./box/box";

import "./sidebar.css";

class Sidebar extends Component {
  state = {
    boxes: [
      { id: uuid(), content: "Avatar", isOpen: true },
      { id: uuid(), content: "Inbox", isOpen: false },
      { id: uuid(), content: "Calendar", isOpen: false },
      { id: uuid(), content: "Contacts", isOpen: false },
      { id: uuid(), content: "Logout", isOpen: false }
    ],
    isOpen: false
  };

  render() {
    const { boxes } = this.state;

    const renderedBoxes = boxes.map(box => {
      return (
        <Box
          id={box.id}
          key={box.id}
          content={box.content}
          isOpen={box.isOpen}
        />
      );
    });

    return <div className="sidebarContainer">{renderedBoxes}</div>;
  }
}

export default Sidebar;
