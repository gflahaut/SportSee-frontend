import React from 'react';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip} from 'recharts';
import PropTypes from 'prop-types';
import './LineChart.css'


const CustomLineChart = ({  data = 'default value' }) => {
    const dayLabels = ['L', 'M', 'Me', 'J', 'V', 'S', 'D'];
const CustomTooltip =({ active, payload})=>{
    if (active && payload && payload.length){
        return(
            <div className='tooltip-container'>
                <p className='tooltip-text'>
                    {`${payload[0].value} min`}
                </p>
            </div>
        )
    }
}
    console.log('data', data);
    return (
        <div className='chart-card'>
            <h3 className='chart-title'>Durée moyenne des sessions</h3>
            <LineChart width={255} height={180} data={data}>
                <CartesianGrid stroke="none" fill='red' />
                <XAxis dataKey="day" tickFormatter={ (tick) => dayLabels[tick - 1] } stroke="white" axisLine={ false } tickLine={ false } />
                <Tooltip  content={<CustomTooltip/>}/>
                <Line type="basis" dataKey="sessionLength" stroke="white" dot={false}></Line>
            </LineChart>
        </div>
    );
};

CustomLineChart.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CustomLineChart;
