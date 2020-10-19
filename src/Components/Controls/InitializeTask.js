import React, { Component } from "react";

class InitializeTask extends Component {
  InitializeTask = () => {
    this.props.generateData();
  };

  render() {
    return (
      <button
        type="button"
        className="btn my-3 btn--initializeTask"
        onClick={this.InitializeTask}
      >
        <i className="fa fa-pencil-square-o" />
        Initialize Task
      </button>
    );
  }
}

export default InitializeTask;
