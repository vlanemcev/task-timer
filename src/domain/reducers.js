import { combineReducers } from "redux";

import * as timer from "./timer";
import * as task from "./task";

export default function createReducer() {
  return combineReducers({
    ...timer.reducer,
    ...task.reducer
  });
}
