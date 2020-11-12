import randomID from "random-id";
import * as types from "../Constants/actionTypes";
import listOfTask from "../Model/getData";

let jsonTask = JSON.parse(localStorage.getItem("tasks"));
let initialState = jsonTask ? jsonTask : [];

let reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LIST_ALL:
      return state;

    case types.INITIALIZE_TASKS:
      if (!jsonTask) {
        localStorage.setItem("tasks", JSON.stringify(listOfTask.list));
        window.location.reload();
      }
      break;

    case types.ADD_TASK:
      action.newTask.id = randomID(5, "aA0");
      jsonTask = [...jsonTask, action.newTask];
      state = jsonTask;
      localStorage.setItem("tasks", JSON.stringify(jsonTask));
      return state;

    default:
      break;
  }
  return state;
};

export default reducer;
