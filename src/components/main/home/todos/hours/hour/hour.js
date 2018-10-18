import React, { Component } from "react";
import uuid from "uuid";

import Task from "./task/task";
import "./hour.css";

class Hour extends Component {
  state = {
    tasks: [{ id: uuid(), task: "sssss" }],
    expanded: false
  };

  expandHour = () => {
    this.setState({
      expanded: !this.state.expanded
    });
  };

  addTask = () => {
    const { tasks } = this.state;

    const newTasks = tasks.concat({ id: uuid(), task: "sssss" });
    console.log(newTasks);
    this.setState({
      tasks: newTasks
    });
  };

  render() {
    const { props } = this;
    const { expanded } = this.state;
    const { tasks } = this.state;
    const displayedTasks = tasks.map(task => {
      return (
        <Task
          className="hour__task"
          name="task"
          id={task.id}
          task={task.task}
        />
      );
    });

    return (
      <div
        className="hour"
        style={
          expanded
            ? { "min-height": "91%", transition: "all 300ms ease-out" }
            : { "min-height": "25%" }
        }
      >
        <div className="hour__time">{props.time}</div>
        <button className="hour__expand" onClick={this.expandHour}>
          {expanded ? "Minimize" : "Expanded"}
        </button>
        <div className="hour__tasks">
          {displayedTasks}
          <button className="hour__addTask" onClick={this.addTask}>
            {" "}
            +{" "}
          </button>
        </div>
      </div>
    );
  }
}

export default Hour;
