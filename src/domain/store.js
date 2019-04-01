import { createStore } from "redux";
import createReducer from "./reducers";

const reduxDebug =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
    : null;

export default function configureStore(initialState = {}) {
  return createStore(createReducer(), initialState, reduxDebug);
}
