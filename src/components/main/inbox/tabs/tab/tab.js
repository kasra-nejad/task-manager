import React from "react";

import "./tab.css";

const Tab = props => {
  this.handleActivate = () => {
    props.activate(props.id);
  };
  return (
    <div
      className="tab"
      style={props.isActive ? { boxShadow: "0px -2px 2px #444040" } : {}}
      onClick={this.handleActivate}
    >
      <div className="tabLabel">{props.content}</div>
    </div>
  );
};

export default Tab;
