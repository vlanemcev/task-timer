import React, { Component } from "react";
import PropTypes from "prop-types";

// helpers
import { formatTime } from "helpers";

// material UI
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

  componentDidMount() {
    const { startTime } = this.props;

    if (startTime !== 0) {
      this.startTimerWithStartDate(startTime);
    }
  }

  runTimer = () => {
    this.timerID = setInterval(() => {
      this.setState((state) => ({ time: Date.now() - state.startTime }));
    }, 100);
  };

  startTimerWithStartDate = (startTime) => {
    this.setState({
      timerOn: true,
      isResumed: false,
      startTime: startTime
    });

    this.runTimer();
  };

  startTimer = (resumed) => {
    const { onTimerFirstStart } = this.props;

    this.setState((state) => ({
      timerOn: true,
      isResumed: !!resumed,
      startTime: Date.now() - state.time
    }));

    this.runTimer();

    if (resumed === false) {
      if (typeof onTimerFirstStart === "function") {
        onTimerFirstStart({
          startTime: Date.now()
        });
      }
    }
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
          id: Date.now(),
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
              <Grid container justify="center" spacing={16}>
                <Grid item>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={this.stopTimer}
                  >
                    Stop
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" onClick={this.resetTimer}>
                    Reset timer
                  </Button>
                </Grid>
              </Grid>
            ) : (
              <Button
                variant="contained"
                color="secondary"
                onClick={this.stopTimer}
              >
                Stop
              </Button>
            )
          ) : isPause ? (
            <Grid container justify="center" spacing={16}>
              <Grid item>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={this.stopTimer}
                >
                  Stop
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.resumeTimer}
                >
                  Resume
                </Button>
              </Grid>
            </Grid>
          ) : (
            <Button
              variant="contained"
              color="primary"
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
  startTime: PropTypes.number,
  onTimerFirstStart: PropTypes.func,
  onTimerStop: PropTypes.func,
  shouldTimerContinue: PropTypes.bool
};

Timer.defaultProps = {
  startTime: 0,
  shouldTimerContinue: false
};

export default Timer;
