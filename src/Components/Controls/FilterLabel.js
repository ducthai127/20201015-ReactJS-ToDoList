import React, { Component } from "react";

class FilterLabel extends Component {
  render() {
    return (
      <div className="filter filter--label text-left display-5 lead mb-3">
        <p className="font-weight-bold mb-1">Label:</p>
        <ul className="list-unstyled">
          <li className="py-1">
            <i className="fa fa-circle mr-2" />
            Frontend
          </li>
          <li className="py-1">
            <i className="fa fa-circle mr-2" />
            Backend
          </li>
          <li className="py-1">
            <i className="fa fa-circle mr-2" />
            API
          </li>
          <li className="py-1">
            <i className="fa fa-circle mr-2" />
            Issue
          </li>
        </ul>
      </div>
    );
  }
}

export default FilterLabel;
