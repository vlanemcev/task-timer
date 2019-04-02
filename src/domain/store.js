import { createStore } from "redux";
import createReducer from "./reducers";

const reduxDevTools =
  process.env.NODE_ENV === "development" &&
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__();

export default function configureStore() {
  return createStore(createReducer(), reduxDevTools);
}
