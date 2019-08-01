import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
  Tooltip
} from 'recharts';
import Title from './Title';
import './DashBoard.scss';

// Generate Sales Data
function createData(date, amount) {
  return { date, amount };
}

const data = [
  createData('07/31', 0),
  createData('08/01', 100),
  createData('08/02', 200),
  createData('08/03', 600),
  createData('08/04', 900),
  createData('08/05', 1200),
  createData('08/06', 1500),
  createData('08/07', 1900),
  createData('08/08', undefined)
];

export default function Chart() {
  return (
    <React.Fragment>
      <Title>Your progress!</Title>
      <div className="chartCon">
        <LineChart
          className="lineChart"
          height={300}
          width={400}
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24
          }}
        >
          <XAxis dataKey="date" />
          <YAxis>
            <Label angle={270} position="left" style={{ textAnchor: 'middle' }}>
              Score
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="amount" stroke="#556CD6" dot={false} />
          <Tooltip />
        </LineChart>
      </div>
    </React.Fragment>
  );
}
