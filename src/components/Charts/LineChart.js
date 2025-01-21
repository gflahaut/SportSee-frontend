import React from 'react';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip } from 'recharts';
import PropTypes from 'prop-types';

const CustomLineChart = ({  data = 'default value' }) => {
    const dayLabels = ['L', 'M', 'Me', 'J', 'V', 'S', 'D'];

    return (
        <LineChart width={ 260 } height={ 260 } data={ data }>
            <CartesianGrid stroke="none" fill='red' />
            <XAxis dataKey="day" tickFormatter={ (tick) => dayLabels[tick - 1] } stroke="white" axisLine={ false } tickLine={ false } />
            <Tooltip />
            <Line type="monotone" dataKey="sessionLength" stroke="white" dot={ false } >
            </Line>
        </LineChart>
    );
};

CustomLineChart.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CustomLineChart;
