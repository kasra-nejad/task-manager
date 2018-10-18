import React, { Component } from "react";
import uuid from "uuid";

import Tab from "./tab/tab";
import "./tabs.css";

class Tabs extends Component {
  state = {
    tabs: [
      { id: uuid(), content: "Unread", isActive: true },
      { id: uuid(), content: "Sent", isActive: false },
      { id: uuid(), content: "Archive", isActive: false }
    ]
  };

  activate = targetId => {
    const { tabs } = this.state;
    const updatedTabs = tabs.map(tab => {
      if (targetId == tab.id) {
        return { ...tab, isActive: true };
      } else {
        return { ...tab, isActive: false };
      }
    });
    this.setState({
      tabs: updatedTabs
    });
  };

  render() {
    const { tabs } = this.state;

    const renderedTabs = tabs.map(tab => {
      return (
        <Tab
          id={tab.id}
          content={tab.content}
          isActive={tab.isActive}
          activate={this.activate}
        />
      );
    });
    return <div className="tabs">{renderedTabs}</div>;
  }
}

export default Tabs;
