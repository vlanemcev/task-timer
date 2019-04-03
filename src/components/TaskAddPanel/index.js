import React, { Component } from "react";
import PropTypes from "prop-types";

import ErrorDialog from "components/ErrorDialog/index";
import Timer from "components/Timer/index";

import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";

import styles from "./styles";

class TaskAddPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taskName: "",
      isShowErrorDialog: false
    };
  }

  handleChangeTaskName = (e) => {
    this.setState({
      taskName: e.target.value
    });
  };

  handleCloseErrorDialog = () => {
    this.setState({
      isShowErrorDialog: false
    });
  };

  handleStopTimer = (params, timerControlMethod) => {
    const { taskName } = this.state;
    const { onAddTask } = this.props;

    if (!taskName) {
      this.setState({
        isShowErrorDialog: true
      });
    } else {
      timerControlMethod();

      onAddTask({
        name: taskName,
        ...params
      });

      this.setState({
        taskName: ""
      });
    }
  };

  render() {
    const { taskName, isShowErrorDialog } = this.state;
    const { classes } = this.props;

    return (
      <Grid container spacing={24}>
        <Grid item xs={12} classes={{ item: classes.taskInputWrap }}>
          <Input
            value={taskName}
            onChange={this.handleChangeTaskName}
            placeholder={"Name of your Task"}
            classes={{ input: classes.taskNameInput }}
          />
          <ErrorDialog
            id={"task-name-error"}
            open={isShowErrorDialog}
            title={"Empty task name"}
            onClose={this.handleCloseErrorDialog}
          >
            You are trying close your task without name, enter the title and try
            again
          </ErrorDialog>
        </Grid>
        <Grid item xs={12} classes={{ item: classes.timerWrap }}>
          <Timer onTimerStop={this.handleStopTimer} />
        </Grid>
      </Grid>
    );
  }
}

TaskAddPanel.propTypes = {
  onAddTask: PropTypes.func.isRequired,
  classes: PropTypes.object
};

export default withStyles(styles)(TaskAddPanel);
