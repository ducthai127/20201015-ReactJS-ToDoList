import React, { Component } from "react";

class Sort extends Component {
  render() {
    return (
      <div className="form-group text-left display-5 lead mb-4">
        <label className="font-weight-bold mb-2">Sort by:</label>
        <select className="form-control font-weight-bold">
          <option className="font-weight-bold">From A to Z</option>
          <option className="font-weight-bold">From Z to A</option>
        </select>
      </div>
    );
  }
}

export default Sort;
