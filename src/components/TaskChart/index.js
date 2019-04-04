import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  Bar,
  XAxis,
  YAxis,
  Legend
} from "recharts";

import { tasksHoursPartitioning } from "helpers";

class TaskChart extends Component {
  render() {
    const { tasks } = this.props;

    return (
      <ResponsiveContainer height={300}>
        <BarChart
          data={tasksHoursPartitioning(tasks)}
          margin={{ top: 30, right: 40, left: 10, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray={"3 3"} />
          <XAxis dateKey={"hour"} />
          <YAxis />
          <Legend />
          <Bar
            dataKey={"occupied"}
            name={"Minutes in this hours"}
            fill={"#8884d8"}
          />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

TaskChart.propTypes = {
  tasks: PropTypes.array.isRequired
};

export default connect((state) => {
  return {
    tasks: state.tasks.items
  };
})(TaskChart);
