/**
 * @fileoverview Composant de la page d'accueil.
 * Permet à l'utilisateur de choisir un profil parmi une liste prédéfinie.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { useUserProfile } from '../../context/UserProfileContext'; // Import du contexte utilisateur
import './Home.css';
import profile from '../../assets/toppng.com-file-svg-profile-icon-vector-980x980.png';

/**
 * Composant représentant la page d'accueil.
 * @returns {JSX.Element} Composant React de la page Home.
 */
const Home = () => {
  const { setProfileId } = useUserProfile(); // Destructure setProfileId depuis le contexte

  /**
   * Gère la sélection d'un profil en mettant à jour l'identifiant du profil dans le contexte.
   * @param {number} id - Identifiant de l'utilisateur sélectionné.
   */
  const handleProfileClick = (id) => {
    if (typeof setProfileId === 'function') {
      setProfileId(id);
    } else {
      console.error('setProfileId is not a function');
    }
  };

  return (
    <div className='home_wrapper'>
      <h1>Choisissez votre profil</h1>
      <div className='link_wrapper'>
        <Link to="/user/12" onClick={ () => handleProfileClick(12) }>
          <div className="card">
            <img src={ profile } className="card-img-top" alt="Profil Karl Dovineau" width={ 60 } height={ 60 } />
            <div className="card-body">
              <h5 className="card-title">Karl Dovineau</h5>
            </div>
          </div>
        </Link>
        <br />
        <Link to="/user/18" onClick={ () => handleProfileClick(18) }>
          <div className="card">
            <img src={ profile } className="card-img-top" alt="Profil Cecilia Ratorez" width={ 60 } height={ 60 } />
            <div className="card-body">
              <h5 className="card-title">Cecilia Ratorez</h5>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
