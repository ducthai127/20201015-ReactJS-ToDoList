import React, { Component } from "react";

// import components
import THead from "./TaskItems/THead";
import Item from "./TaskItems/Item";

class TaskItems extends Component {
  
  render() {
    let elmItem = this.props.tasks.map((item, index) => {
      return <Item key={index} item={item} index={index} editTask={this.props.editTask} />;
    });

    return (
      <div className="col-md-9 px-0">
        <div className="container-fluid px-0 mb-3">
          <div className="row header header--right d-flex align-items-center mx-0">
            <div className="col-md-6">
              <div className=" d-flex justify-content-between">
                <h3 className="text-left font-weight-bold ml-2">Task List</h3>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group text-left my-0">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                />
              </div>
            </div>
          </div>
        </div>
        <div className="px-3">
          <table className="table table-hover">
            <THead />
            <tbody>
              {elmItem}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default TaskItems;
