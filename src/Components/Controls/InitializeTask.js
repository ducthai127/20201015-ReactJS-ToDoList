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
        <i className="fa fa-cloud-download mr-2" />
        Initialize Task
      </button>
    );
  }
}

export default InitializeTask;
