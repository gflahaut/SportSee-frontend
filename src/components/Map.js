// src/components/CaloryMap.js
import React from 'react';
import PropTypes from 'prop-types';
import caloryIcon from '../assets/calories-icon.png';
import carbohydrateIcon from "../assets/carbs-icon.png";
import lipidIcon from "../assets/fat-icon.png";
import proteinIcon from "../assets/protein-icon.png";
import './Map.css';

const ICON_BY_TYPE = {
  Calories: caloryIcon,
  Glucides: carbohydrateIcon,
  Protéines: proteinIcon,
  Lipides: lipidIcon,
};

const UNIT_BY_TYPE = {
  Calories: "kCal",
  Glucides: "g",
  Protéines: "g",
  Lipides: "g",
};

const Map = ({ type, text }) => {
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

Map.propTypes = {
  type: PropTypes.oneOf(['Calories', 'Glucides', 'Protéines', 'Lipides']).isRequired,
  text: PropTypes.number.isRequired,
};

export default Map;
