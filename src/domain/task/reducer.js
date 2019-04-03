import { POSTFIX } from "domain/constants";
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

      case LOAD_TASKS + POSTFIX.success: {
        return {
          ...state,
          meta: {
            isLoading: false,
            isFromLS: true
          },
          items: payload.tasks.map((item) => ({ ...item }))
        };
      }

      case LOAD_TASKS + POSTFIX.failure:
        return {
          ...state,
          meta: {
            isLoading: false,
            isFromLS: false,
            failureText: payload.message
          }
        };

      case ADD_TASK:
        return {
          ...state,
          items: [
            ...state.items,
            {
              id: payload.id,
              name: payload.name,
              startTime: payload.startTime,
              endTime: payload.endTime,
              spendTime: payload.endTime - payload.startTime
            }
          ]
        };

      case ADD_TASKS:
        return payload.tasks.map((item) => {
          return {
            ...state,
            items: [...state.items, ...item]
          };
        });

      case DELETE_TASK:
        return {
          ...state,
          items: state.items.filter((task) => task.id !== payload.id)
        };

      case DELETE_ALL_TASKS:
        return {
          ...state,
          items: []
        };

      default:
        return state;
    }
  }
};
