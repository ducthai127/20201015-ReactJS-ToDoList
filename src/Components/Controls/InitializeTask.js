import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../Actions/index";

class InitializeTask extends Component {
  render() {
    return (
      <button
        type="button"
        className="btn my-3 btn--initializeTask"
        onClick={this.props.initializeTasks}
      >
        <i className="fa fa-cloud-download mr-2" />
        Initialize Task
      </button>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    initializeTasks: () => {
      dispatch(actions.initializeTasks());
    },
  };
};

export default connect(null, mapDispatchToProps)(InitializeTask);
