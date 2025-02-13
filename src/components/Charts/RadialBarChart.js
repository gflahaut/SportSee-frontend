import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import './RadialBarChart.css';

const CustomRadialBarChart = ({  data = 'default value' }) => {
    const score = data[0].todayScore;

    const pieData = [
        { value: score, fill: 'red' },       // Segment du score
        { value: 1 - score, fill: 'transparent' }, // Segment restant
    ];

    return (
        <div className='pieChart'>
              <h3 className='pieChart-title'>Score</h3>
            <PieChart width={220} height={220}>
                <text x={40} y={40} fill="#20253A" fontWeight={500} textAnchor="left" dominantBaseline="central">
                    <tspan fontSize="15">Score</tspan>
                </text>
                <circle cx="50%" cy="50%" r="90" fill="#fff" />
                <Pie
                    data={pieData}
                    dataKey="value"
                    innerRadius={90}
                    outerRadius={100}
                    startAngle={90}
                    endAngle={450}  // Un tour complet (360°) + 90° pour partir du haut
                >
                    {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} cornerRadius="50%" />
                    ))}
                </Pie>
                <text x={"50%"} y={"50%"} fill="#20253A" fontWeight={500} textAnchor="middle" dominantBaseline="central">
                    <tspan x={"50%"} y={"45%"} fontSize="26">{score * 100}%</tspan>
                    <tspan x={"50%"} y={"54%"} fontSize="16" fill='#74798C'>de votre</tspan>
                    <tspan x={"50%"} y={"62%"} fontSize="16" fill='#74798C'>objectif</tspan>
                </text>
            </PieChart>
        </div>
    );
};

export default CustomRadialBarChart;
