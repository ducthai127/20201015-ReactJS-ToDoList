import * as types from "../Constants/actionTypes";

export const listAll = () => {
  return {
    type: types.LIST_ALL,
  };
};

export const initializeTasks = () => {
  return {
    type: types.INITIALIZE_TASKS,
  };
};
export const addTask = (newTask) => {
  return {
    type: types.ADD_TASK,
    newTask: newTask,
  };
};
