import { POSTFIX } from "domain/constant";
import {
  ADD_TASK,
  ADD_TASKS,
  DELETE_TASK,
  DELETE_ALL_TASKS,
  LOAD_TASKS
} from "./actions";

const tasksInitialState = {
  meta: {
    isLoading: false,
    isFromLS: false
  },
  items: []
};

export const reducer = {
  tasks(state = tasksInitialState, { type, ...payload }) {
    switch (type) {
      case LOAD_TASKS + POSTFIX.request:
        return {
          ...state,
          meta: {
            isLoading: true
          }
        };

      case LOAD_TASKS + POSTFIX.success:
        return payload.tasks.map((item) => {
          return {
            meta: {
              isLoading: false,
              isFromLS: true
            },
            items: [{ ...item }]
          };
        });

      case LOAD_TASKS + POSTFIX.failure:
        return {
          ...state,
          meta: {
            isLoading: false,
            isFromLS: false
          }
        };

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

      case ADD_TASKS:
        return payload.tasks.map((item) => {
          return { ...item };
        });

      case DELETE_TASK:
        return state.filter((task) => task.id !== payload.id);

      case DELETE_ALL_TASKS:
        return [];

      default:
        return state;
    }
  }
};
