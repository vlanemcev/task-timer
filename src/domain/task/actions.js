export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";

export const addTask = (payload) => {
  return {
    type: ADD_TASK,
    ...payload
  };
};

export const deleteTask = (id) => {
  return {
    type: DELETE_TASK,
    id
  };
};
