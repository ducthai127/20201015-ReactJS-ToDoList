import React, { Component } from "react";

class FilterProgress extends Component {
  render() {
    return (
      <div className="filter filter--progress text-left display-5 lead mb-3">
        <p className="font-weight-bold mb-1">Filter:</p>
        <ul className="list-unstyled">
          <li className="py-1">
            <i className="fa fa-anchor mr-2" />
            Not Yet Started
          </li>
          <li className="py-1">
            <i className="fa fa-spinner mr-2" />
            In Progress
          </li>
          <li className="py-1">
            <i className="fa fa-check-square-o mr-2" />
            Done
          </li>
          <li className="py-1">
            <i className="fa fa-ban mr-2" />
            Cancel
          </li>
        </ul>
      </div>
    );
  }
}

export default FilterProgress;
