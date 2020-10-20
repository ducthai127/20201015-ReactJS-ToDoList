import React, { Component } from "react";

class AddNewTask extends Component {

  handleAddNewTask = () => {
    this.props.clearBeforeAddNewTask();
  }

  render() {
    return (
      <button
        type="button"
        className="btn mb-4 btn--newTask"
        data-toggle="modal"
        data-target="#modalTask"
        onClick={this.handleAddNewTask}
      >
        <i className="fa fa-plus-square mr-2" />
        Add New Task
      </button>
    );
  }
}

export default AddNewTask;
