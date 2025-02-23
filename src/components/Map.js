/**
 * Composant affichant une carte avec une icône et une valeur pour un type de nutriment (Calories, Glucides, Protéines, Lipides).
 * Ce composant prend en entrée un type et une valeur, et affiche une icône correspondant au type ainsi que la valeur formatée.
 * 
 * @component
 * @example
 * // Exemple d'utilisation du composant Map
 * <Map type="Calories" text={ 1200 } />
 * 
 * @param {Object} props Les propriétés du composant.
 * @param {string} props.type Le type de nutriment à afficher, l'une des valeurs : 'Calories', 'Glucides', 'Protéines', 'Lipides'.
 * @param {number} props.text La valeur numérique associée au type, représentant la quantité de nutriment.
 * 
 * @returns {JSX.Element} Un composant JSX affichant l'icône du nutriment, sa valeur et son type.
 */
import React from 'react';
import PropTypes from 'prop-types';
import caloryIcon from '../assets/calories-icon.png';
import carbohydrateIcon from "../assets/carbs-icon.png";
import lipidIcon from "../assets/fat-icon.png";
import proteinIcon from "../assets/protein-icon.png";
import './Map.css';

// Mappage des types de nutriments vers leurs icônes respectives.
const ICON_BY_TYPE = {
  Calories: caloryIcon,
  Glucides: carbohydrateIcon,
  Protéines: proteinIcon,
  Lipides: lipidIcon,
};

// Mappage des types de nutriments vers leurs unités respectives.
const UNIT_BY_TYPE = {
  Calories: "kCal",
  Glucides: "g",
  Protéines: "g",
  Lipides: "g",
};

/**
 * Composant qui affiche une carte avec l'icône, la valeur du nutriment et son type.
 * La valeur est formatée avec une unité appropriée.
 * 
 * @param {Object} props Les propriétés du composant.
 * @param {string} props.type Le type de nutriment à afficher (Calories, Glucides, Protéines, Lipides).
 * @param {number} props.text La valeur numérique du nutriment.
 * 
 * @returns {JSX.Element} Un élément JSX affichant l'icône du nutriment, sa valeur et son type.
 */
const Map = ({ type, text }) => {
  // Récupération de l'icône et de l'unité en fonction du type de nutriment.
  const icon = ICON_BY_TYPE[type];
  const unit = UNIT_BY_TYPE[type];
  const formattedValue = `${text.toLocaleString()} ${unit}`;

  return (
    <div className="icon-text">
      <img src={ icon } alt={ type } width={ 60 } height={ 60 } className="icon" />
      <span className="text">
        { formattedValue }
        <br />
        { type }
      </span>
    </div>
  );
};

// Définition des types de propriétés attendues pour ce composant.
Map.propTypes = {
  type: PropTypes.oneOf(['Calories', 'Glucides', 'Protéines', 'Lipides']).isRequired,
  text: PropTypes.number.isRequired,
};

export default Map;
