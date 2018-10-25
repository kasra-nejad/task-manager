import React from "react";
import { NavLink } from "react-router-dom";

import "./tab.css";

const Tab = props => {
  this.handleActivate = () => {
    props.activate(props.id);
  };
  return (
    <NavLink
      to={process.env.PUBLIC_URL + `/inbox/${props.content}`}
      onClick={this.handleActivate}
      style={props.isActive ? { boxShadow: "0px -2px 2px #444040" } : {}}
    >
      <div className="tab">
        <div className="tabLabel">{props.content}</div>
      </div>
    </NavLink>
  );
};

export default Tab;
