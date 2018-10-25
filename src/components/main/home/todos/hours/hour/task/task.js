import React, { Component } from "react";

import "./task.css";

class Task extends Component {
  state = {
    task: this.props.task
  };

  handleChange = e => {
    this.setState({
      task: e.target.value
    });
  };

  render() {
    return (
      <textarea
        className="hour__task"
        name="task"
        task={this.state.task}
        placeholder="Type your task here"
        onChange={this.handleChange}
      />
    );
  }
}

export default Task;
