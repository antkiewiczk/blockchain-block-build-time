import React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

class LineChartComponent extends Component {

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