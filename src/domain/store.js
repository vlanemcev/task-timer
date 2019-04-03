import { createStore, compose, applyMiddleware } from "redux";
import createReducer from "./reducers";
import createSagaMiddleware from "redux-saga";

// import our sagas
import rootSaga from "domain/sagas";

// created sage middleware
const sagaMiddleware = createSagaMiddleware();

const enhancers = [applyMiddleware(sagaMiddleware)];

// If Redux DevTools Extension is installed use it, otherwise use Redux compose
const composeEnhancers =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

export default function configureStore() {
  const store = createStore(createReducer(), composeEnhancers(...enhancers));

  sagaMiddleware.run(rootSaga);

  return store;
}
