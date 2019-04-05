import React, { Component } from "react";
import PropTypes from "prop-types";

// react-router components
import { Switch, Route } from "react-router";

// redux
import { compose } from "redux";
import { connect } from "react-redux";

// action creators for tasks and timer
import { loadSavedTasks, addTask, deleteTask } from "domain/task";
import { saveTimerDataInLS, resetTimerDataInLS } from "domain/timer";

// application components
import TaskAddPanel from "components/TaskAddPanel";
import TaskList from "components/TaskList";
import TaskChart from "components/TaskChart";

// material UI
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import styles from "./styles";

class Home extends Component {
  componentDidMount() {
    this.props.loadSavedTasks();
  }

  handleChangeTab = (e, value) => {
    const { history } = this.props;
    history.push(value);
  };

  render() {
    const {
      location,
      startTimerDate,
      tasks,
      classes,
      saveTimerDataInLS,
      resetTimerDataInLS,
      addTask,
      deleteTask
    } = this.props;

    return (
      <div className={classes.layout}>
        <Paper>
          <Grid container spacing={32} justify="center">
            <Grid item xs={12}>
              <TaskAddPanel
                startTimerDate={startTimerDate}
                onFirstStartTasksTimer={saveTimerDataInLS}
                onEndTasksTimer={resetTimerDataInLS}
                onAddTask={addTask}
              />
            </Grid>
            <Grid item xs={12} classes={{ item: classes.taskListWrap }}>
              <AppBar position="static">
                <Tabs
                  value={location.pathname === "/chart" ? "chart" : "tasks"}
                  centered
                  variant="fullWidth"
                  onChange={this.handleChangeTab}
                >
                  <Tab label="Task Log" value="tasks" />
                  <Tab label="Tasks Chart" value="chart" />
                </Tabs>
              </AppBar>
              <div className={classes.tabsWrap}>
                <Switch>
                  <Route exact path="/chart" component={TaskChart} />
                  <Route
                    exact
                    path="/tasks"
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
  startTimerDate: PropTypes.number,
  tasks: PropTypes.array.isRequired,
  classes: PropTypes.object,
  saveTimerDataInLS: PropTypes.func.isRequired,
  resetTimerDataInLS: PropTypes.func.isRequired,
  loadSavedTasks: PropTypes.func.isRequired,
  addTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired
};

export default compose(
  connect(
    (state) => {
      return {
        startTimerDate: state.timer.startTime,
        tasks: state.tasks.items
      };
    },
    {
      saveTimerDataInLS,
      resetTimerDataInLS,
      loadSavedTasks,
      addTask,
      deleteTask
    }
  ),
  withStyles(styles)
)(Home);
