import * as types from "../Constants/actionTypes";
import listOfTask from "../Model/getData";

let jsonTask = JSON.parse(localStorage.getItem("tasks"));
let initialState = jsonTask ? jsonTask : [];

let reducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case types.LIST_ALL:
      return state;

    case types.INITIALIZE_TASKS:
      localStorage.setItem("tasks", JSON.stringify(listOfTask.list));
      window.location.reload();
      break;

    default:
      break;
  }
  return state;
};

export default reducer;
