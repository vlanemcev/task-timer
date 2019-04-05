import React from "react";
import PropTypes from "prop-types";

// react-router components
import { Link } from "react-router-dom";

// material UI
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";

import styles from "./styles";

const NoMatch = (props) => {
  const { location, classes } = props;
  return (
    <div className={classes.layout}>
      <Paper>
        <Grid container spacing={24} justify="center">
          <Grid item xs={12}>
            <Typography align="center" color="textPrimary" variant="h5">
              {location.state && location.state.errorText
                ? location.state.errorText
                : `No matches for this location: ${location.pathname}`}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography align="center">
              <Button
                color="primary"
                variant="contained"
                component={Link}
                to="/"
              >
                Go to Home
              </Button>
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

NoMatch.propTypes = {
  location: PropTypes.object,
  classes: PropTypes.object
};

export default withStyles(styles)(NoMatch);
