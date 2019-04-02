import React, { Component } from "react";
import PropTypes from "prop-types";
import { formatTime } from "../../helpers";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import styles from "./styles.module.scss";

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timerOn: false,
      isPause: false,
      isResumed: false,
      startTime: 0,
      time: 0
    };

    this.timerID = null;
  }

  startTimer = (resumed) => {
    this.setState({
      timerOn: true,
      isResumed: !!resumed,
      startTime: Date.now() - this.state.time,
      time: this.state.time
    });

    this.timerID = setInterval(() => {
      this.setState({
        time: Date.now() - this.state.startTime
      });
    }, 100);
  };

  pauseTimer = () => {
    this.setState({
      timerOn: false,
      isPause: true
    });

    clearInterval(this.timerID);
  };

  resumeTimer = () => {
    this.startTimer(true);
  };

  stopTimer = () => {
    const { time, startTime } = this.state;
    const { onTimerStop, shouldTimerContinue } = this.props;

    this.pauseTimer();

    if (typeof onTimerStop === "function") {
      /* define a timer management method that will be passed to the parent handler,
      so that it can call it after its actions */
      let timerMethodToPass = shouldTimerContinue
        ? this.resumeTimer
        : this.resetTimer;

      onTimerStop(
        {
          id: this.timerID,
          startTime,
          endTime: time + startTime
        },
        timerMethodToPass
      );
    } else {
      this.resetTimer();
    }
  };

  resetTimer = () => {
    clearInterval(this.timerID);

    this.setState({
      timerOn: false,
      isPause: false,
      isResumed: false,
      time: 0,
      startTime: 0
    });
  };

  render() {
    const { time, timerOn, isPause, isResumed } = this.state;

    return (
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <div className={styles.timerWrap}>
            {formatTime(time, false, true)}
          </div>
        </Grid>
        <Grid item xs={12}>
          {timerOn ? (
            isResumed ? (
              <Grid container justify={"center"} spacing={16}>
                <Grid item>
                  <Button
                    variant="contained"
                    color={"secondary"}
                    onClick={this.stopTimer}
                  >
                    Stop
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant={"contained"} onClick={this.resetTimer}>
                    Reset timer
                  </Button>
                </Grid>
              </Grid>
            ) : (
              <Button
                variant="contained"
                color={"secondary"}
                onClick={this.stopTimer}
              >
                Stop
              </Button>
            )
          ) : isPause ? (
            <Grid container justify={"center"} spacing={16}>
              <Grid item>
                <Button
                  variant={"contained"}
                  color={"secondary"}
                  onClick={this.stopTimer}
                >
                  Stop
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant={"contained"}
                  color={"primary"}
                  onClick={this.resumeTimer}
                >
                  Resume
                </Button>
              </Grid>
            </Grid>
          ) : (
            <Button
              variant={"contained"}
              color={"primary"}
              onClick={() => this.startTimer(false)}
            >
              Start
            </Button>
          )}
        </Grid>
      </Grid>
    );
  }
}

Timer.propTypes = {
  onTimerStop: PropTypes.func,
  shouldTimerContinue: PropTypes.bool
};

Timer.defaultProps = {
  shouldTimerContinue: false
};

export default Timer;
