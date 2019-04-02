import React, { Component } from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { formatTime } from "helpers/index.js";

import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";

import styles from "./styles";

class Task extends Component {
  render() {
    const { match, task, classes } = this.props;

    return (
      <div className={classes.layout}>
        <Paper className={classes.paper}>
          {task["id"] ? (
            <React.Fragment>
              <Grid
                container
                spacing={32}
                alignItems={"baseline"}
                justify={"center"}
              >
                <Grid item xs={6}>
                  <Typography variant="h4" align="left">
                    {task["name"]}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h4" align="right">
                    {task["id"]}
                  </Typography>
                </Grid>
              </Grid>
              <Divider className={classes.divider} />
              <Grid container spacing={32} justify={"center"}>
                <Grid item xs={6}>
                  <Typography variant="subtitle1">Task start time</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle2" align="right">
                    {formatTime(task["startTime"], true)}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={32} justify={"center"}>
                <Grid item xs={6}>
                  <Typography variant="subtitle1">Task end time</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle2" align="right">
                    {formatTime(task["endTime"], true)}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={32} justify={"center"}>
                <Grid item xs={6}>
                  <Typography variant="subtitle1">Spend Time</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h5" align="right">
                    {formatTime(task["spendTime"])}
                  </Typography>
                </Grid>
              </Grid>
            </React.Fragment>
          ) : (
            <Typography variant="h5" align="right">
              {`Sorry, but task with ID: ${
                match.params["id"]
              } - does not exist`}
            </Typography>
          )}
          <div className={classes.homeBtn}>
            <Button
              variant={"contained"}
              color={"primary"}
              component={Link}
              to={"/"}
            >
              Go to Home
            </Button>
          </div>
        </Paper>
      </div>
    );
  }
}

Task.propTypes = {
  match: PropTypes.object,
  classes: PropTypes.object,
  task: PropTypes.object.isRequired
};

export default compose(
  connect((state, ownProps) => {
    return {
      task: state.tasks.reduce((prev, task) => {
        return +ownProps.match.params["id"] === task.id
          ? { ...prev, ...task }
          : prev;
      }, {})
    };
  }),
  withStyles(styles)
)(Task);
