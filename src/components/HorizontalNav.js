/**
 * Composant de navigation horizontale qui affiche les liens vers différentes pages de l'application.
 * Ce composant inclut un logo cliquable qui redirige vers la page d'accueil et des liens vers les pages suivantes :
 * Accueil, Profil (dynamique selon l'ID utilisateur), Réglages, et Communauté.
 * 
 * @component
 * @example
 * // Exemple d'utilisation du composant HorizontalNav
 * <HorizontalNav />
 * 
 * @returns {JSX.Element} Un élément JSX représentant la barre de navigation horizontale avec le logo et les liens vers les différentes pages.
 */
import React from 'react';
import { Link } from 'react-router-dom';
import './HorizontalNav.css';
import logo from '../assets/logo.svg';
import { useUserProfile } from '../context/UserProfileContext';

/**
 * Composant de la barre de navigation horizontale affichant les liens vers l'accueil, le profil,
 * les réglages et la communauté. Le lien vers le profil est dynamique, basé sur l'ID de l'utilisateur.
 *
 * @returns {JSX.Element} Un élément JSX représentant la barre de navigation horizontale avec le logo et les liens vers les différentes pages.
 */
const HorizontalNav = () => {
  // Utilisation du contexte pour récupérer l'ID de l'utilisateur
  const { profileId } = useUserProfile(); 

  return (
    <nav className="navbar-horizontal">
      <div className="navbar-link">
          <Link to="/" className="nav-ho logo-wrapper">
            <img src={ logo } alt='SportSee Logo' width="180" height="60" className="logo" />
          </Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/" className="nav-ho">Accueil</Link></li>
        <li>
          <Link to={ `/user/${profileId}` } className="nav-ho">
            Profil
          </Link>
        </li>
        <li><Link to="/settings" className="nav-ho">Réglages</Link></li>
        <li><Link to="/communauty" className="nav-ho">Communauté</Link></li>
      </ul>
    </nav>
  );
};

export default HorizontalNav;
