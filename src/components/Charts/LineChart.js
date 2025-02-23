import React from 'react';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip } from 'recharts';
import PropTypes from 'prop-types';
import './LineChart.css';

/**
 * Composant graphique représentant la durée moyenne des sessions sous forme de courbe.
 * Le graphique affiche la durée des sessions pour chaque jour de la semaine.
 *
 * @category Components
 * @component
 * @example
 * // Exemple d'utilisation du composant CustomLineChart
 * <CustomLineChart data={[{ day: 1, sessionLength: 40 }, { day: 2, sessionLength: 50 }, ...]} />
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {Array} props.data - Données à afficher, chaque objet contenant un `day` (jour) et `sessionLength` (durée de la session).
 *
 * @returns {React.Component} Un graphique de type LineChart affichant la durée moyenne des sessions.
 */
const CustomLineChart = ({ data }) => {
    const dayLabels = ['L', 'M', 'Me', 'J', 'V', 'S', 'D'];

    /**
     * Tooltip personnalisé affichant la durée de la session en minutes.
     *
     * @param {Object} props - Les propriétés du tooltip.
     * @param {boolean} props.active - Indique si le tooltip est actif.
     * @param {Array} props.payload - Données associées à la session, avec la durée de la session.
     *
     * @returns {React.Component|null} Un composant Tooltip ou null si pas actif.
     */
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className='tooltip-container'>
                    <p className='tooltip-text'>
                        {`${payload[0].value} min`}
                    </p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className='chart-card'>
            <h3 className='chart-title'>Durée moyenne des sessions</h3>
            <LineChart width={255} height={180} data={data}>
                <CartesianGrid stroke="none" fill='red' />
                <XAxis
                    dataKey="day"
                    tickFormatter={ (tick) => dayLabels[tick - 1] }
                    stroke="white"
                    axisLine={ false }
                    tickLine={ false }
                />
                <Tooltip content={<CustomTooltip />} />
                <Line type="basis" dataKey="sessionLength" stroke="white" dot={false} />
            </LineChart>
        </div>
    );
};

CustomLineChart.propTypes = {
    /**
     * Données à afficher dans le graphique.
     * Chaque objet doit contenir un champ `day` (jour) et un champ `sessionLength` (durée de la session).
     * 
     * @type {Array}
     * @example [{ day: 1, sessionLength: 40 }, { day: 2, sessionLength: 50 }, ...]
     */
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CustomLineChart;
