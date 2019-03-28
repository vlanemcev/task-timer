import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import styles from "./styles.module.scss";

class Timer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			timerOn: false,
			startTime: 0,
			time: 0
		};

		this.timerID = null;
	}

	startTimer = () => {
		this.setState({
			timerOn: true,
			startTime: Date.now() - this.state.time,
			time: this.state.time
		});

		this.timerID = setInterval(() => {
			this.setState({
				time: Date.now() - this.state.startTime
			})
		},1000);
	}

	stopTimer = () => {
		this.resetTimer();
		clearInterval(this.timerID);
	}

	resetTimer = () => {
		this.setState({
			timerOn: false,
			time: 0,
			startTime: 0
		});
	}

	formatTime = (time) => {
		const sec = time / 1000;
		const cutSec = Math.floor(sec % 60);
		const min = Math.floor((sec % 3600 ) / 60);
		const hrs = Math.floor(sec / 3600);

		return `${hrs < 10 ? "0" : ""}${hrs}:${min < 10 ? "0" : ""}${min}:${cutSec < 10 ? "0" : ""}${cutSec}`;
	}

	render() {
		const { time, timerOn } = this.state;

		return (
				<Grid container spacing={16}>
					<Grid item xs={12}>
						<div className={styles.timerWrap}>
							{this.formatTime(time)}
						</div>
					</Grid>
					<Grid item xs={12}>
						{
							timerOn ?
									<Button variant="contained" onClick={this.stopTimer}>Stop</Button> :
									<Button variant="contained" onClick={this.startTimer}>Start</Button>
						}
					</Grid>
				</Grid>
		);
	}
}

export default Timer;