import React, { Component } from "react";

// import components
import THead from "./TaskItems/THead";
import Item from "./TaskItems/Item";
import Search from "./TaskItems/Search";

class TaskItems extends Component {
  render() {
    let { tasks, filterType, filterProgress, sortType } = this.props;
    let filterTasks = [];
    switch (filterType) {
      case "filterSearch":
        filterTasks = tasks.filter((task) => {
          return (
            task.name
              .toLowerCase()
              .indexOf(this.props.filterSearch.toLowerCase()) !== -1
          );
        });
        break;

      case "filterProgress":
        if (filterProgress === -1) {
          filterTasks = tasks;
        } else {
          for (let task of tasks) {
            if (parseInt(task.status, 10) === filterProgress) {
              filterTasks = [...filterTasks, task];
            }
          }
        }
        break;

      case "filterLabel":
        break;

      case "filterPriority":
        break;

      case "sort":
        filterTasks = tasks;
        if(sortType === "asc") {
          filterTasks.sort((a, b) => {
            let x = a.name.toLowerCase(), y = b.name.toLowerCase();
            if(x < y) {return -1;}
            if(x > y) {return 1;}
            return 0
          })
        }
        if(sortType === "desc") {
          filterTasks.sort((a, b) => {
            let x = a.name.toLowerCase(), y = b.name.toLowerCase();
            if(x > y) {return -1;}
            if(x < y) {return 1;}
            return 0
          })
        }
        break;

      default:
        filterTasks = tasks;
        break;
    }

    let elmItem = filterTasks.map((item, index) => {
      return (
        <Item
          key={index}
          item={item}
          index={index}
          editTask={this.props.editTask}
          changeProgress={this.props.changeProgress}
        />
      );
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
              <Search changeFilterSearch={this.props.changeFilterSearch} />
            </div>
          </div>
        </div>
        <div className="px-3">
          <table className="table table-hover">
            <THead />
            <tbody>{elmItem}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default TaskItems;
