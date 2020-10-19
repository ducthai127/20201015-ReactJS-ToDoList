import React, { Component } from "react";

class AddNewTask extends Component {
  render() {
    return (
      <button
        type="button"
        className="btn mb-3 btn--newTask"
        data-toggle="modal"
        data-target="#modalTask"
      >
        <i className="fa fa-pencil-square-o" />
        Add New Task
      </button>
    );
  }
}

export default AddNewTask;
