import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router";

import Home from "pages/Home/index";
import Task from "pages/Task/index";
import NoMatch from "pages/NoMatch/index";

import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import styles from "./styles";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />

        <Switch>
          <Route exact path={"/"} render={() => <Redirect to={"/tasks"} />} />
          <Route exact path={"/tasks/:id"} component={Task} />
          <Route exact path={"/tasks"} component={Home} />
          <Route exact path={"/chart"} component={Home} />
          <Route component={NoMatch} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(App);
