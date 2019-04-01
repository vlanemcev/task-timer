import { ADD_TASK, DELETE_TASK } from "./actions";

export const reducer = {
  tasks(state = [], { type, ...payload }) {
    switch (type) {
      case ADD_TASK:
        return [
          ...state,
          {
            id: payload.id,
            name: payload.name,
            startTime: payload.startTime,
            endTime: payload.endTime,
            spendTime: payload.endTime - payload.startTime
          }
        ];

      case DELETE_TASK:
        return state.filter((task) => task.id !== payload.id);

      default:
        return state;
    }
  }
};
