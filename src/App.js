import React, { Component } from "react";
import "./App.css";

// import components
import ModalPopup from "./Components/ModalPopup";
import Controls from "./Components/Controls";
import TaskItems from "./Components/TaskItems";

import listOfTask from "./Model/getData";

class App extends Component {
  render() {
    console.log(listOfTask.list);

    return (
      <div className="App">
        <div>
          <h1 className="text-center my-2">TASK MANAGER</h1>
          <div className="container-fluid">
            <div className="row">
              {/* PANEL */}
              <Controls />

              {/* DISPLAY */}
              <TaskItems />
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
