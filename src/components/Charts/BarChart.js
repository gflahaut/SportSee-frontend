/**
 * Composant qui affiche un graphique à barres personnalisées représentant l'activité quotidienne de l'utilisateur,
 * avec deux séries de données : le poids en kilogrammes et les calories brûlées en kilocalories.
 * Utilise la bibliothèque `recharts` pour afficher les données sous forme de barres avec des axes et un tooltip personnalisés.
 * 
 * @component
 * @example
 * // Exemple d'utilisation du composant CustomBarChart
 * <CustomBarChart data={userActivityData} />
 * 
 * @param {Object} props - Les propriétés passées au composant.
 * @param {Array} props.data - Les données à afficher dans le graphique. Chaque objet de l'array doit contenir des propriétés `day`, `kilogram`, et `calories`.
 * 
 * @returns {JSX.Element} Un élément JSX représentant un graphique à barres avec l'activité quotidienne de l'utilisateur.
 */
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import './BarChart.css';

/**
 * Tooltip personnalisé affiché lors du survol d'une barre du graphique.
 * Affiche les valeurs de poids et de calories brûlées pour la journée sélectionnée.
 * 
 * @param {Object} props - Les propriétés passées au composant Tooltip.
 * @param {boolean} props.active - Indique si le tooltip est actif (visible) ou non.
 * @param {Array} props.payload - Contient les données à afficher dans le tooltip.
 * @param {string} props.label - Le label (la journée) à afficher dans le tooltip.
 * 
 * @returns {JSX.Element|null} Un élément JSX représentant le tooltip ou null si le tooltip n'est pas actif.
 */
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${payload[0].value}`}</p>
        <p className="label">{`${payload[1].value}`}</p>
      </div>
    );
  }
  return null;
};

/**
 * Composant pour afficher un graphique à barres représentant l'activité quotidienne de l'utilisateur.
 * Le graphique affiche deux séries de données : le poids (kg) et les calories brûlées (kcal).
 * 
 * @param {Object} props - Les propriétés passées au composant.
 * @param {Array} props.data - Les données à afficher dans le graphique.
 * 
 * @returns {JSX.Element} Un élément JSX représentant le graphique à barres.
 */
const CustomBarChart = ({ data = 'default value' }) => {

  // Mapping des dates vers des labels plus lisibles.
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
          />
          <Tooltip content={<CustomTooltip />} />
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
