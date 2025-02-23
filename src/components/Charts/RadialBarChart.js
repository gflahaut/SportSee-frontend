import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import PropTypes from 'prop-types';
import './RadialBarChart.css';

/**
 * Composant graphique circulaire (radial) représentant le score de l'utilisateur par rapport à son objectif.
 * 
 * Ce graphique affiche un score sous forme de diagramme circulaire, où une partie du cercle est colorée
 * en rouge, indiquant le score, et l'autre partie est transparente, représentant le reste.
 *
 * @category Components
 * @component
 * @example
 * // Exemple d'utilisation du composant CustomRadialBarChart
 * <CustomRadialBarChart data={[{ todayScore: 0.75 }]} />
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {Array} props.data - Un tableau contenant les données de l'utilisateur, avec un champ `todayScore` représentant son score du jour.
 *
 * @returns {React.Component} Un graphique circulaire représentant le score de l'utilisateur.
 */
const CustomRadialBarChart = ({ data }) => {
  // Récupère le score du jour de l'utilisateur
  const score = data[0].todayScore;

  // Définition des segments du graphique circulaire
  const pieData = [
    { value: score, fill: 'red' },          // Segment représentant le score
    { value: 1 - score, fill: 'transparent' }, // Segment restant transparent
  ];

  return (
    <div className="pieChart">
      <h3 className="pieChart-title">Score</h3>
      <PieChart width={220} height={220}>
        {/* Titre du graphique */}
        <text x={40} y={40} fill="#20253A" fontWeight={500} textAnchor="left" dominantBaseline="central">
          <tspan fontSize="15">Score</tspan>
        </text>
        
        {/* Cercle de fond du graphique */}
        <circle cx="50%" cy="50%" r="90" fill="#fff" />
        
        {/* Diagramme circulaire représentant le score */}
        <Pie
          data={pieData}
          dataKey="value"
          innerRadius={90}    // Rayon intérieur du cercle
          outerRadius={100}   // Rayon extérieur du cercle
          startAngle={90}     // Commence à partir du haut
          endAngle={450}      // Un tour complet (360°) + 90° pour partir du haut
        >
          {/* Définition des segments du graphique */}
          {pieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.fill} cornerRadius="50%" />
          ))}
        </Pie>

        {/* Texte central avec le score */}
        <text x="50%" y="50%" fill="#20253A" fontWeight={500} textAnchor="middle" dominantBaseline="central">
          <tspan x="50%" y="45%" fontSize="26">{score * 100}%</tspan>
          <tspan x="50%" y="54%" fontSize="16" fill='#74798C'>de votre</tspan>
          <tspan x="50%" y="62%" fontSize="16" fill='#74798C'>objectif</tspan>
        </text>
      </PieChart>
    </div>
  );
};

CustomRadialBarChart.propTypes = {
  /**
   * Données de l'utilisateur, incluant un champ `todayScore` représentant le score du jour.
   * 
   * @type {Array}
   * @example [{ todayScore: 0.75 }]
   */
  data: PropTypes.arrayOf(PropTypes.shape({
    todayScore: PropTypes.number.isRequired
  })).isRequired,
};

export default CustomRadialBarChart;
