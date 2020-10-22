import React, { Component } from "react";
import "./App.css";
// var randomID = require("random-id");
import randomID from "random-id";

// import components
import ModalPopup from "./Components/ModalPopup";
import Controls from "./Components/Controls";
import TaskItems from "./Components/TaskItems";

import listOfTask from "./Model/getData";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      isAddNewTask: true,
      taskEditing: null,

      // filter
      filterType: "",
      filterProgress: -1,
      filterSearch: "",
    };
  }

  generateData = () => {
    localStorage.setItem("tasks", JSON.stringify(listOfTask.list));
  };

  componentWillMount = () => {
    let tasksJSON = JSON.parse(localStorage.getItem("tasks"));
    this.setState({
      tasks: tasksJSON,
    });
  };

  addNewTask = (data) => {
    if (this.state.isAddNewTask) {
      data.id = randomID(5, "aA0");
      let tasksJSON = JSON.parse(localStorage.getItem("tasks"));
      tasksJSON = [...tasksJSON, data];
      this.setState({
        tasks: tasksJSON,
      });
      localStorage.setItem("tasks", JSON.stringify(tasksJSON));
    }
  };

  clearBeforeAddNewTask = () => {
    this.setState({
      isAddNewTask: true,
    });
  };

  editTask = (data) => {
    this.setState({
      isAddNewTask: false,
      taskEditing: data,
    });
  };

  onEditTask = (data) => {
    if (!this.state.isAddNewTask) {
      let tasksJSON = JSON.parse(localStorage.getItem("tasks"));

      // find task
      for (let i in tasksJSON) {
        if (tasksJSON[i].id === data.id) {
          tasksJSON[i].name = data.name;
          tasksJSON[i].priority = data.priority;
          tasksJSON[i].labelArr = data.labelArr;
          tasksJSON[i].memberIDArr = data.memberIDArr;
          tasksJSON[i].status = data.status;
          tasksJSON[i].description = data.description;
        }
      }

      this.setState({
        tasks: tasksJSON,
      });
      localStorage.setItem("tasks", JSON.stringify(tasksJSON));
    }
  };

  changeProgress = (id, progress) => {
    let tasksJSON = JSON.parse(localStorage.getItem("tasks"));
    for (let index in tasksJSON) {
      if (tasksJSON[index].id === id) {
        tasksJSON[index].status = progress;
      }
    }
    this.setState({
      tasks: tasksJSON,
    });
    localStorage.setItem("tasks", JSON.stringify(tasksJSON));
  };

  changeFilterProgress = (filterProgress) => {
    this.setState({
      filterType: "filterProgress",
      filterProgress: filterProgress,
    });
  };

  changeFilterSearch = (filterSearch) => {
    this.setState({
      filterType: "filterSearch",
      filterSearch: filterSearch,
    })
  }

  render() {
    let {
      tasks,
      isAddNewTask,
      taskEditing,
      filterType,
      filterProgress,
      filterSearch
    } = this.state;

    return (
      <div className="App">
        <div>
          <h1 className="text-center my-3 font-weight-bold">TASK MANAGER</h1>
          <div className="container-fluid">
            <div className="row">
              {/* PANEL */}
              <Controls
                generateData={this.generateData}
                clearBeforeAddNewTask={this.clearBeforeAddNewTask}
                changeFilterProgress={this.changeFilterProgress}
              />

              {/* DISPLAY */}
              <TaskItems
                tasks={tasks}
                editTask={this.editTask}
                changeProgress={this.changeProgress}
                filterType={filterType}
                filterProgress={filterProgress}
                changeFilterSearch={this.changeFilterSearch}
                filterSearch={filterSearch}
              />
            </div>
          </div>

          {/* The Modal */}
          <ModalPopup
            addNewTask={this.addNewTask}
            isAddNewTask={isAddNewTask}
            taskEditing={taskEditing}
            onEditTask={this.onEditTask}
          />
        </div>
      </div>
    );
  }
}

export default App;
