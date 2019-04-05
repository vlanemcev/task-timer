import React from "react";
import ReactDOM from "react-dom";

// redux
import { Provider } from "react-redux";

// react-router components
import { BrowserRouter as Router } from "react-router-dom";

// function to configure store
import configureStore from "./domain/store";

// application main page
import App from "./pages/App";

import "./index.css";

import * as serviceWorker from "./serviceWorker";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router basename="/task-timer">
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
