import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';

const translationMap = {
  cardio: 'Cardio',
  energy: 'Énergie',
  endurance: 'Endurance',
  strength: 'Force',
  speed: 'Vitesse',
  intensity: 'Intensité',
};

const CustomRadarChart = ({  data = 'default value' }) => {
  return (
    <div>
        <RadarChart width={220} height={220} cx="50%" cy="50%" outerRadius="80" data={ data } margin={{ top: 0, right: 30, bottom: 0, left: 30 }} startAngle={30} endAngle={-330}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            axisLine={false}
            dataKey="kind"
            tickLine={false}
            tick={{
              dy: 4,
              fill: '#fff',
              fontSize: 12,
            }}
            tickFormatter={(kind) => translationMap[kind]}
          />
          <Radar
            name="Performance"
            dataKey="value"
            stroke="#FF0101B2"
            fill="#FF0101B2"
            fillOpacity={0.6}
          />
        </RadarChart>
    </div>
  );
};

export default CustomRadarChart;
