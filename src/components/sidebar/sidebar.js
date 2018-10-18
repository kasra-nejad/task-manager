import React, { Component } from "react";
import uuid from "uuid";

import Avatar from "./avatar/avatar";
import Box from "./box/box";

import "./sidebar.css";

class Sidebar extends Component {
  state = {
    boxes: [
      { id: uuid(), content: "Inbox", isActive: false },
      { id: uuid(), content: "Calendar", isActive: false },
      { id: uuid(), content: "Contacts", isActive: false },
      { id: uuid(), content: "Logout", isActive: false }
    ],
    avatarActive: true
  };

  activateAvatar = () => {
    const boxes = this.state.boxes;
    let updatedBoxes = boxes.map(box => {
      return { ...box, isActive: false };
    });
    this.setState({ boxes: updatedBoxes, avatarActive: true });
  };

  activateBox = e => {
    const boxes = this.state.boxes;
    let updatedBoxes = boxes.map(box => {
      if (e == box.id) {
        return { ...box, isActive: true };
      } else {
        return { ...box, isActive: false };
      }
    });

    this.setState({
      boxes: updatedBoxes,
      avatarActive: false
    });
  };

  render() {
    const { boxes } = this.state;
    const { avatarActive } = this.state;

    const renderedBoxes = boxes.map(box => {
      return (
        <Box
          id={box.id}
          key={box.id}
          content={box.content}
          isActive={box.isActive}
          activateBox={this.activateBox}
        />
      );
    });

    return (
      <div className="sidebarContainer">
        <Avatar active={avatarActive} activate={this.activateAvatar} />
        {renderedBoxes}
      </div>
    );
  }
}

export default Sidebar;
