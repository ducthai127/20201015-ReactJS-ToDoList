import React, { Component } from "react";

// import components
import InitializeTask from "./Controls/InitializeTask";
import AddNewTask from "./Controls/AddNewTask";
import FilterProgress from "./Controls/FilterProgress";
import FilterLabel from "./Controls/FilterLabel";
import FilterPriority from "./Controls/FilterPriority";
import Sort from "./Controls/Sort";

class Controls extends Component {
  render() {
    return (
      <div className="col-md-3 text-center px-0">
        <div className="header header--left d-flex align-items-center">
          <img src="./img/user_1.jpg" className="ml-2 user" alt="user" />
          <h3 className="font-weight-bold d-inline font-weight-light ml-2">
            Nguyen Duc Thai
          </h3>
        </div>

        {/* Get Task From LocalStorage */}
        <InitializeTask generateData={this.props.generateData} />

        {/* Add New Task */}
        <AddNewTask clearBeforeAddNewTask={this.props.clearBeforeAddNewTask} />

        {/* Filter & Sort */}
        <div className="px-3">
          {/* FilterProgress */}
          <FilterProgress changeFilterProgress={this.props.changeFilterProgress} />

          {/* FilterLabel */}
          <FilterLabel />

          {/* FilterPriority */}
          <FilterPriority />

          {/* Sort */}
          <Sort changeSortType={this.props.changeSortType} />
        </div>
      </div>
    );
  }
}

export default Controls;
