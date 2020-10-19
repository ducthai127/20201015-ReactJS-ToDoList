import React, { Component } from "react";
import "./App.css";

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

  render() {
    let { tasks } = this.state;

    return (
      <div className="App">
        <div>
          <h1 className="text-center my-2">TASK MANAGER</h1>
          <div className="container-fluid">
            <div className="row">
              {/* PANEL */}
              <Controls generateData={this.generateData} />

              {/* DISPLAY */}
              <TaskItems tasks={tasks} />
            </div>
          </div>

          {/* The Modal */}
          <ModalPopup />
        </div>
      </div>
    );
  }
}

export default App;
