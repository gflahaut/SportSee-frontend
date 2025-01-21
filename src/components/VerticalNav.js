// src/components/VerticalNav.js
import React from 'react';
import pictobd from '../assets/picto-bodybuilding.png';
import pictocy from '../assets/picto-cycling.png';
import pictome from '../assets/picto-meditation.png';
import pictosw from '../assets/picto-swimming.png';
import './VerticalNav.css';

const VerticalNav = () => {
  return (
    <nav className="vertical-nav">
      <div className="icons">
        <li><a href="#home"><i><img src={ pictobd } alt="icone d'un altère de musculation" className='icone' /></i></a></li>
        <li><a href="#home"><i><img src={ pictocy } alt="icone d'un cycliste" className='icone' /></i></a></li>
        <li><a href="#home"><i><img src={ pictome } alt="icone d'une personne en train de méditer" className='icone' /></i></a></li>
        <li><a href="#home"><i><img src={ pictosw } alt="icone d'une personne en train de nager" className='icone' /></i></a></li>
        <p className='Copiryght'>Copiryght, SportSee 2020</p>
      </div>
     
    </nav>
  );
};

export default VerticalNav;
