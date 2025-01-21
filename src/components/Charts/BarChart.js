import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import './BarChart.css';

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
        <Legend className="legend" verticalAlign="top" height={0}/>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="day"
            axisLine={true}
            tickLine={false}
            tick={{ fontSize: '14px', fontWeight: '500', fill: '#9B9EAC'}}
            dy={15}
            tickFormatter={(day) => translationMap[day]}
            stroke="#DEDEDE"
            strokeWidth={2}
            tickMargin={16}
          />
          <YAxis
            orientation="right"
            tickCount={3}
            axisLine={false}
            tickLine={false}
            type="number"
            tick={{ color: '#9B9EAC', fontSize: '14px', fontWeight: '500', fill: '#9B9EAC' }}
            domain={['dataMin-2', 'dataMax+1']}
          />
          <Tooltip />
          <Bar
            dataKey="kilogram"
            fill="#282D30"
            barSize={8}
            legendType="circle"
            name="Poids (Kg)"
            unit="Kg"
            radius={[20, 20, 0, 0]}
          />
          <Bar
            dataKey="calories"
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

