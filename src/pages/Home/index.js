import React, { Component } from "react";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router";
import { compose } from "redux";
import { connect } from "react-redux";
import { addTask, deleteTask } from "domain/task";

import TaskAddPanel from "components/TaskAddPanel/index";
import TaskList from "components/TaskList/index";
import TaskChart from "components/TaskChart/index";

import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import styles from "./styles";

class Home extends Component {
  handleChangeTab = (e, value) => {
    const { history } = this.props;
    history.push(value);
  };

  render() {
    const { location, tasks, classes, addTask, deleteTask } = this.props;

    return (
      <div className={classes.layout}>
        <Paper>
          <Grid container spacing={32} justify={"center"}>
            <Grid item xs={12}>
              <TaskAddPanel onAddTask={addTask} />
            </Grid>
            <Grid item xs={12} classes={{ item: classes.taskListWrap }}>
              <AppBar position={"static"}>
                <Tabs
                  value={location.pathname === "/chart" ? "chart" : "tasks"}
                  centered
                  variant="fullWidth"
                  onChange={this.handleChangeTab}
                >
                  <Tab label="Task Log" value={"tasks"} />
                  <Tab label="Tasks Chart" value={"chart"} />
                </Tabs>
              </AppBar>
              <div className={classes.tabsWrap}>
                <Switch>
                  <Route
                    exact
                    path={"/chart"}
                    render={(props) => <TaskChart {...props} />}
                  />
                  <Route
                    exact
                    path={"/tasks"}
                    render={(props) => (
                      <TaskList
                        {...props}
                        tasksList={tasks}
                        onDeleteTask={deleteTask}
                      />
                    )}
                  />
                </Switch>
              </div>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}

Home.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object,
  tasks: PropTypes.array.isRequired,
  classes: PropTypes.object,
  addTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired
};

export default compose(
  connect(
    (state) => {
      return {
        tasks: state.tasks
      };
    },
    { addTask, deleteTask }
  ),
  withStyles(styles)
)(Home);
