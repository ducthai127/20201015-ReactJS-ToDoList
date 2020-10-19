import React, { Component } from "react";

class AddNewTask extends Component {

  handleAddNewTask = () => {
    this.props.clearBeforeAddNewTask();
  }

  render() {
    return (
      <button
        type="button"
        className="btn mb-3 btn--newTask"
        data-toggle="modal"
        data-target="#modalTask"
        onClick={this.handleAddNewTask}
      >
        <i className="fa fa-pencil-square-o" />
        Add New Task
      </button>
    );
  }
}

export default AddNewTask;
