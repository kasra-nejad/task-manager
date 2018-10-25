import React from "react";

import Hours from "./hours/hours";
import "./todos.css";

const Todos = props => {
  return (
    <div className="todos">
      <Hours />
    </div>
  );
};

export default Todos;
