import React from "react";
import { NavLink } from "react-router-dom";

import "./box.css";

const Box = props => {
  const handleActivate = () => {
    props.activateBox(props.id);
  };

  const isActive = props.isActive;

  return (
    <NavLink to={process.env.PUBLIC_URL + `/${props.content}`}>
      <div
        id={props.id}
        key={props.key}
        className="box"
        style={
          isActive
            ? { backgroundColor: "rgba(32, 65, 0, 0.747)", color: "#ccc" }
            : {}
        }
        onClick={handleActivate}
      >
        <div className="label" style={isActive ? { color: "#ccc" } : {}}>
          {props.content}
        </div>
      </div>
    </NavLink>
  );
};

export default Box;
