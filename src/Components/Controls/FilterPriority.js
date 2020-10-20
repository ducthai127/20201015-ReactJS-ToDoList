import React, { Component } from "react";

class FilterPriority extends Component {
  render() {
    return (
      <div className="form-group text-left display-5 lead mb-4">
        <label className="font-weight-bold mb-2" htmlFor="sel1">Priority:</label>
        <select className="form-control font-weight-bold">
          <option className="font-weight-bold">All</option>
          <option className="text-info font-weight-bold">Low</option>
          <option className="text-success font-weight-bold">Medium</option>
          <option className="text-danger font-weight-bold">High</option>
        </select>
      </div>
    );
  }
}

export default FilterPriority;
