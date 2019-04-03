import { POSTFIX } from "domain/constants";

export const LOAD_TASKS = "LOAD_TASKS";
export const ADD_TASK = "ADD_TASK";
export const ADD_TASKS = "ADD_TASKS";
export const DELETE_TASK = "DELETE_TASK";
export const DELETE_ALL_TASKS = "DELETE_ALL_TASK";

export const loadSavedTasks = () => {
  return {
    type: LOAD_TASKS + POSTFIX.request
  };
};

export const loadSavedTasksSuccess = (tasks) => {
  return {
    type: LOAD_TASKS + POSTFIX.success,
    tasks
  };
};

export const loadSavedTasksFailure = (message) => {
  return {
    type: LOAD_TASKS + POSTFIX.failure,
    message
  };
};

export const addTask = (payload) => {
  return {
    type: ADD_TASK,
    ...payload
  };
};

export const addTasks = (payload) => {
  return {
    type: ADD_TASKS,
    items: [...payload]
  };
};

export const deleteTask = (id) => {
  return {
    type: DELETE_TASK,
    id
  };
};

export const deleteAllTasks = () => {
  return {
    type: DELETE_ALL_TASKS
  };
};
