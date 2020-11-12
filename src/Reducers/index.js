import { combineReducers } from "redux";
import tasks from "./tasks";

const Reducers = combineReducers({
  tasks, // tasks: tasks
});

export default Reducers;
