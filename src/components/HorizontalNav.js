import React from 'react';
import { Link } from 'react-router-dom';
import './HorizontalNav.css';
import logo from '../assets/logo.svg';
import { useUserProfile } from '../context/UserProfileContext';

const HorizontalNav = () => {
  const { profileId } = useUserProfile(); 

  return (
    <nav className="navbar-horizontal">
      <ul className="navbar-links">
        <li>
          <Link to="/" className="nav-ho logo-wrapper">
            <img src={ logo } alt='SportSee Logo' width="180" height="60" className="logo" />
          </Link>
        </li>
      </ul>
      <ul className="navbar-links">
        <li><Link to="/" className="nav-ho">Accueil</Link></li>
      </ul>
      <ul className="navbar-links">
        <li>
          <Link to={ `/user/${profileId}` } className="nav-ho">
            Profil
          </Link>
        </li>
      </ul>
      <ul className="navbar-links">
        <li><Link to="/settings" className="nav-ho">Réglages</Link></li>
      </ul>
      <ul className="navbar-links">
        <li><Link to="/communauty" className="nav-ho">Communauté</Link></li>
      </ul>
    </nav>
  );
};

export default HorizontalNav;
