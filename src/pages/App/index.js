import React, { Component } from "react";

// react-router components
import { Switch, Route, Redirect } from "react-router";

// application pages
import Home from "pages/Home";
import Task from "pages/Task";
import NoMatch from "pages/NoMatch";

// material UI
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import styles from "./styles";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />

        <Switch>
          <Route exact path="/" render={() => <Redirect to="/tasks" />} />
          <Route exact path="/tasks/:id" component={Task} />
          <Route exact path="/tasks" component={Home} />
          <Route exact path="/chart" component={Home} />
          <Route component={NoMatch} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(App);
