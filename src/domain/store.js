import { createStore, compose, applyMiddleware } from "redux";
import createReducer from "./reducers";
import createSagaMiddleware from "redux-saga";

// import our sagas
import rootSaga from "domain/sagas";

// created sage middleware
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];
const enhancers = [applyMiddleware(...middlewares)];

// If Redux DevTools Extension is installed use it, otherwise use Redux compose
const composeEnhancers =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

// check the presence of the timer property in the local storage
let timerData = null;
if (localStorage.getItem("timer") !== null) {
  timerData = JSON.parse(localStorage.getItem("timer"));
}

const initialState = {
  timer: {
    meta: {
      isLoading: false,
      isFromLS: timerData ? true : false
    },
    startTime: timerData ? timerData : 0
  },
  tasks: {
    meta: {
      isLoading: false,
      isFromLS: false
    },
    items: []
  }
};

export default function configureStore() {
  const store = createStore(
    createReducer(),
    initialState,
    composeEnhancers(...enhancers)
  );

  // run sagas middleware
  sagaMiddleware.run(rootSaga);

  return store;
}
