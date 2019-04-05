import React from "react";
import PropTypes from "prop-types";

// react-router components
import { Link } from "react-router-dom";

// helpers
import { formatTime } from "helpers";

// material UI
import { withStyles } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";

import styles from "./styles";

const TaskList = (props) => {
  const { tasksList, classes, onDeleteTask } = props;

  return (
    <div className={classes.tableWrap}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow classes={{ root: classes.headRow }}>
            <TableCell classes={{ head: classes.headCell }}>№</TableCell>
            <TableCell classes={{ head: classes.headCell }}>Task</TableCell>
            <TableCell classes={{ head: classes.headCell }}>
              Time start
            </TableCell>
            <TableCell classes={{ head: classes.headCell }}>Time end</TableCell>
            <TableCell classes={{ head: classes.headCell }}>
              Time spend
            </TableCell>
            <TableCell classes={{ head: classes.headCell }}>Info</TableCell>
            <TableCell classes={{ head: classes.headCell }}>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasksList.length > 0 ? (
            tasksList.map((task, index) => (
              <TableRow key={task.id} className={classes.bodyRow}>
                <TableCell classes={{ body: classes.bodyCell }}>
                  {index + 1}
                </TableCell>
                <TableCell classes={{ body: classes.bodyCell }}>
                  {task.name}
                </TableCell>
                <TableCell classes={{ body: classes.bodyCell }}>
                  {formatTime(task.startTime, true)}
                </TableCell>
                <TableCell classes={{ body: classes.bodyCell }}>
                  {formatTime(task.endTime, true)}
                </TableCell>
                <TableCell classes={{ body: classes.bodyCell }}>
                  {formatTime(task.spendTime)}
                </TableCell>
                <TableCell classes={{ body: classes.bodyCell }}>
                  <Button
                    variant="contained"
                    classes={{
                      contained: classes.btn,
                      label: classes.btnLabel
                    }}
                    component={Link}
                    to={`/tasks/${task.id}`}
                  >
                    Info
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    classes={{
                      contained: classes.btn,
                      label: classes.btnLabel
                    }}
                    onClick={() => onDeleteTask(task.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow className={classes.bodyRow}>
              <TableCell
                colSpan={7}
                align="center"
                classes={{ body: classes.noTaskCell }}
              >
                No tasks for show
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

TaskList.propTypes = {
  tasksList: PropTypes.array.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
  classes: PropTypes.object
};

TaskList.defaultProps = {
  tasks: []
};

export default withStyles(styles)(TaskList);
