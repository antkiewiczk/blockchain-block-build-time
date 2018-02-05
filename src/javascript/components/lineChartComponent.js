import React, { Component } from 'react';
import { render } from 'react-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

class LineChartComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="chart">
        <LineChart width={800} height={300} data={this.props.data}>
          <Line type="monotone" dataKey="buildTime" stroke="#0EBFE9" />
          <XAxis dataKey="number" />
          <YAxis dataKey="buildTime" />
          <Tooltip />
        </LineChart>
      </div>
    );
  }
}

export default LineChartComponent;
