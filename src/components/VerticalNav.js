/**
 * Composant de navigation verticale affichant une série d'icônes de sport.
 * Ce composant présente une barre de navigation avec des icônes pour différentes activités physiques,
 * telles que la méditation, la natation, le cyclisme et la musculation.
 * Il inclut également un texte de copyright en bas.
 * 
 * @component
 * @example
 * <VerticalNav />
 * 
 * @returns {JSX.Element} La barre de navigation verticale avec des icônes et un texte de copyright.
 */
import React from 'react';
import pictobd from '../assets/picto-bodybuilding.png';
import pictocy from '../assets/picto-cycling.png';
import pictome from '../assets/picto-meditation.png';
import pictosw from '../assets/picto-swimming.png';
import './VerticalNav.css';

/**
 * Composant de la barre de navigation verticale.
 * Il affiche des icônes représentant des activités physiques.
 * 
 * @returns {JSX.Element} La structure HTML de la barre de navigation verticale.
 */
const VerticalNav = () => {
  return (
    <nav className="vertical-nav">
      <ul className="icons">
        <li><a href="#home"><img src={ pictome } alt="icone d'une personne en train de méditer" className='icone' /></a></li>
        <li><a href="#home"><img src={ pictosw } alt="icone d'une personne en train de nager" className='icone' /></a></li>
        <li><a href="#home"><img src={ pictocy } alt="icone d'un cycliste" className='icone' /></a></li>
        <li><a href="#home"><img src={ pictobd } alt="icone d'un altère de musculation" className='icone' /></a></li>
      </ul>
      <div className='copyright'>
        <p>Copyright, SportSee 2020</p>
      </div>
    </nav>
  );
};

export default VerticalNav;
