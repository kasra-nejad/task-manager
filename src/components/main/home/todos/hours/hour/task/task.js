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
        value={this.state.task}
        onChange={this.handleChange}
      />
    );
  }
}

export default Task;
