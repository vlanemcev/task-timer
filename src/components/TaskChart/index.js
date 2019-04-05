import React, { Component } from "react";
import PropTypes from "prop-types";

// redux
import { connect } from "react-redux";

// action creators for tasks
import { deleteAllTasks, addTasks } from "domain/task";

// helpers
import { generateTasks, tasksHoursPartitioning } from "helpers";

// rechart components
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  Bar,
  XAxis,
  YAxis,
  Legend,
  Tooltip
} from "recharts";

// material UI
import Button from "@material-ui/core/Button";

class TaskChart extends Component {
  handleGenerateTasks = () => {
    const { deleteAllTasks, addTasks } = this.props;
    const generatedTasks = generateTasks();

    deleteAllTasks();
    addTasks(generatedTasks);
  };

  render() {
    const { tasks } = this.props;

    return (
      <React.Fragment>
        <ResponsiveContainer height={300}>
          <BarChart
            data={tasksHoursPartitioning(tasks)}
            margin={{ top: 30, right: 40, left: 10, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dateKey="hour" />
            <YAxis />
            <Legend />
            <Tooltip />
            <Bar
              dataKey="occupied"
              name="Minutes in this hours"
              fill="#8884d8"
            />
          </BarChart>
        </ResponsiveContainer>
        <div style={{ textAlign: "right", padding: "10px 20px" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleGenerateTasks}
          >
            Generate tasks
          </Button>
        </div>
      </React.Fragment>
    );
  }
}

TaskChart.propTypes = {
  tasks: PropTypes.array.isRequired,
  deleteAllTasks: PropTypes.func.isRequired,
  addTasks: PropTypes.func.isRequired
};

export default connect(
  (state) => {
    return {
      tasks: state.tasks.items
    };
  },
  { deleteAllTasks, addTasks }
)(TaskChart);
