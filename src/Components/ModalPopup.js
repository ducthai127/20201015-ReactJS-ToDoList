import React, { Component, useState, useEffect } from "react";
import CheckboxGroup from "react-checkbox-group";

class ModalPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      priority: "",
      labelArr: [],
      memberIDArr: [],
      description: "",
    };
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
  };

  memberChanged = (newMember) => {
    this.setState({
      memberIDArr: newMember,
    });
  };

  labelChanged = (newLabel) => {
    this.setState({
      labelArr: newLabel,
    });
  };

  render() {
    return (
      <div className="modal fade" id="modalTask">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <h4 className="modal-title">Add Task</h4>
              <button type="button" className="close" data-dismiss="modal">
                ×
              </button>
            </div>
            <form onSubmit={this.onSubmit}>
              {/* Modal body */}
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="taskName">Task Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description:</label>
                  <textarea
                    className="form-control"
                    rows={2}
                    id="description"
                    name="description"
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="priority">Priority:</label>
                  <select
                    className="form-control"
                    id="priority"
                    name="priority"
                    onChange={this.onChange}
                  >
                    <option value={-1}>Select...</option>
                    <option value={3}>Low</option>
                    <option value={2}>Medium</option>
                    <option value={1}>High</option>
                  </select>
                </div>

                <CheckboxGroup
                  name="memberIDArr"
                  value={this.state.memberIDArr}
                  onChange={this.memberChanged}
                >
                  {(Checkbox) => (
                    <>
                      {" "}
                      Person:
                      <br />
                      <label className="mr-3">
                        <Checkbox value="user_2" /> Tuan
                      </label>
                      <label className="mr-3">
                        <Checkbox value="user_3" /> Tiep
                      </label>
                      <label className="mr-3">
                        <Checkbox value="user_4" /> Thuan
                      </label>
                      <label>
                        <Checkbox value="user_5" /> Tien
                      </label>
                    </>
                  )}
                </CheckboxGroup>

                <br />
                <CheckboxGroup
                  name="labelArr"
                  value={this.state.labelArr}
                  onChange={this.labelChanged}
                >
                  {(Checkbox) => (
                    <>
                      {" "}
                      Label:
                      <br />
                      <label className="mr-3">
                        <Checkbox value="Frontend" /> Frontend
                      </label>
                      <label className="mr-3">
                        <Checkbox value="Backend" /> Backend
                      </label>
                      <label className="mr-3">
                        <Checkbox value="API" /> API
                      </label>
                      <label>
                        <Checkbox value="Issue" /> Issue
                      </label>
                    </>
                  )}
                </CheckboxGroup>
              </div>
              {/* Modal footer */}
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-success"
                  data-dismiss="modal"
                >
                  Add Task
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalPopup;
