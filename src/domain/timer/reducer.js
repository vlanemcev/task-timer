import { POSTFIX } from "domain/constants";
import { LOAD_TIMER_DATA, SET_TIMER, RESET_TIMER } from "./actions";

const timerInitialState = {
  meta: {
    isLoading: false,
    isFromLS: false
  },
  startTime: 0
};

export const reducer = {
  timer(state = timerInitialState, { type, ...payload }) {
    switch (type) {
      case LOAD_TIMER_DATA + POSTFIX.request:
        return {
          ...state,
          meta: {
            isLoading: true
          }
        };

      case LOAD_TIMER_DATA + POSTFIX.success: {
        return {
          ...state,
          meta: {
            isLoading: false,
            isFromLS: true
          },
          startTime: payload.startTime
        };
      }

      case LOAD_TIMER_DATA + POSTFIX.failure:
        return {
          ...state,
          meta: {
            isLoading: false,
            isFromLS: false,
            failureText: payload.message
          }
        };

      case SET_TIMER:
        return {
          ...state,
          startTime: payload.startTime
        };

      case RESET_TIMER:
        return {
          ...state,
          startTime: 0
        };

      default:
        return state;
    }
  }
};
