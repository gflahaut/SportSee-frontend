import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import './BarChart.css';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${payload[0].value}`}</p>
        <p className="label">{`${payload[1].value}`}</p>
      </div>
    );
  }
}
const CustomBarChart = ({ data = 'default value' }) => {

  const translationMap = {
    '2020-07-01': '1',
    '2020-07-02': '2',
    '2020-07-03': '3',
    '2020-07-04': '4',
    '2020-07-05': '5',
    '2020-07-06': '6',
    '2020-07-07': '7',
  };

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <h2 className='barChartWrapper_title'>Activité quotidienne</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
        <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '80px' }} />
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="day"
            axisLine={true}
            tickLine={false}
            tick={{ fontSize: '14px', fontWeight: '500', fill: '#9B9EAC'}}
            tickFormatter={(day) => translationMap[day]}
            stroke="#DEDEDE"
            strokeWidth={2}
            tickMargin={16}
          />
          <YAxis
            orientation="right"
            yAxisId="right"
            dataKey="kilogram"
            tickCount={3}
            axisLine={false}
            tickLine={false}
            type="number"
            tick={{ color: '#9B9EAC', fontSize: '14px', fontWeight: '500', fill: '#9B9EAC' }}
            domain={['dataMin-2', 'dataMax+1']}
          />
           <YAxis
            orientation="left"
            yAxisId="left"
            dataKey="calories"
            hide={true}
            // tickCount={3}
            axisLine={false}
            tickLine={false}
            // type="number"
            // tick={{ color: '#9B9EAC', fontSize: '14px', fontWeight: '500', fill: '#9B9EAC' }}
            // domain={['dataMin-10', 'dataMax+10']}
          />
          <Tooltip content={<CustomTooltip />}/>
          <Bar
            dataKey="kilogram"
            yAxisId="right"
            fill="#282D30"
            barSize={8}
            legendType="circle"
            name="Poids (Kg)"
            unit="Kg"
            radius={[20, 20, 0, 0]}
          />
          <Bar
            dataKey="calories"
            yAxisId="left"
            fill="#E60000"
            barSize={8}
            legendType="circle"
            name="Calories brûlées (kCal)"
            unit="Kcal"
            radius={[20, 20, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomBarChart;

