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
    const { onTimerStop, afterStopAction } = this.props;

    this.pauseTimer();

    if (typeof onTimerStop === "function") {
      onTimerStop(
        {
          id: this.timerID,
          startTime,
          endTime: time + startTime
        },
        this[`${afterStopAction}Timer`]
      );
    } else {
      this[`${afterStopAction}Timer`]();
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
    const { stopBtnText } = this.props;

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
                    {stopBtnText}
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
                {stopBtnText}
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
                  {stopBtnText}
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
  stopBtnText: PropTypes.string,
  onTimerStop: PropTypes.func,
  afterStopAction: PropTypes.oneOf(["resume", "reset", "pause"])
};

Timer.defaultProps = {
  stopBtnText: "Stop",
  afterStopAction: "reset"
};

export default Timer;
