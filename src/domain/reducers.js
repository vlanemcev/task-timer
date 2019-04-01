import { combineReducers } from "redux";

import * as task from "./task";

export default function createReducer() {
  return combineReducers({
    ...task.reducer
  });
}
