import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';
import PropTypes from 'prop-types';

/**
 * Composant graphique radar représentant la performance de l'utilisateur dans différents domaines
 * (cardio, énergie, endurance, etc.) sous forme de graphique radar.
 * 
 * @category Components
 * @component
 * @example
 * // Exemple d'utilisation du composant CustomRadarChart
 * <CustomRadarChart data={[{ kind: 'cardio', value: 80 }, { kind: 'energy', value: 60 }, ...]} />
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {Array} props.data - Données à afficher, chaque objet contenant un `kind` (type de performance) et `value` (valeur de la performance).
 *
 * @returns {React.Component} Un graphique radar affichant la performance de l'utilisateur.
 */
const CustomRadarChart = ({ data }) => {
  const translationMap = {
    cardio: 'Cardio',
    energy: 'Énergie',
    endurance: 'Endurance',
    strength: 'Force',
    speed: 'Vitesse',
    intensity: 'Intensité',
  };

  return (
    <div>
        <RadarChart width={220} height={220} cx="50%" cy="50%" outerRadius={80} data={data} margin={{ top: 0, right: 30, bottom: 0, left: 30 }} startAngle={90} endAngle={-270}>
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

CustomRadarChart.propTypes = {
  /**
   * Données à afficher dans le graphique radar.
   * Chaque objet doit contenir un champ `kind` (type de performance) et un champ `value` (valeur de la performance).
   * 
   * @type {Array}
   * @example [{ kind: 'cardio', value: 80 }, { kind: 'energy', value: 60 }, ...]
   */
  data: PropTypes.arrayOf(PropTypes.shape({
    kind: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired
  })).isRequired,
};

export default CustomRadarChart;
