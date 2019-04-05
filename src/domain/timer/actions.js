import { POSTFIX } from "domain/constants";

export const LOAD_TIMER_DATA = "LOAD_TIMER_DATA";
export const SET_TIMER = "SET_TIMER";
export const RESET_TIMER = "RESET_TIMER";

export const loadSavedTimerData = () => {
  return {
    type: LOAD_TIMER_DATA + POSTFIX.request
  };
};

export const loadSavedTimerDataSuccess = (payload) => {
  return {
    type: LOAD_TIMER_DATA + POSTFIX.success,
    startTime: payload
  };
};

export const loadSavedTimerDataFailure = (message) => {
  return {
    type: LOAD_TIMER_DATA + POSTFIX.failure,
    message
  };
};

export const saveTimerDataInLS = (startTime) => {
  return {
    type: SET_TIMER,
    startTime
  };
};

export const resetTimerDataInLS = () => {
  return {
    type: RESET_TIMER
  };
};
