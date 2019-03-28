import React, {Component} from 'react';

import Input from "../../components/Input/index";
import Timer from "../../components/Timer/index";

import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import styles from "./styles";

class App extends Component {
	render() {
		const { classes } = this.props;

		return (
				<React.Fragment>
					<CssBaseline />
					<div className={classes.layout}>
						<Paper>
							<Grid container spacing={32} justify={"center"}>
								<Grid
										item
										xs={12}
										classes={{item: classes.taskInputWrap}}
								>
									<Input
											placeholder={"Name of your Task"}
											classes={{input: classes.taskNameInput}}
									/>
								</Grid>
								<Grid
										item
										xs={12}
										classes={{item: classes.timerWrap}}
								>
									<Timer />
								</Grid>
							</Grid>
						</Paper>
					</div>
				</React.Fragment>
		);
	}
}

export default withStyles(styles)(App);
