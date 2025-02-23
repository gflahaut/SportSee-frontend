/**
 * Composant `Settings` représentant une page de paramètres en cours de développement.
 * 
 * Ce composant affiche un message de bienvenue et une note indiquant que la page est en développement,
 * encourageant l'utilisateur à revenir plus tard pour plus de contenu.
 * 
 * @component
 * @example
 * return (
 *   <Settings />
 * )
 * 
 * @returns {JSX.Element} Le composant `Settings` qui rend un message d'accueil pour la page en développement.
 */
import React from 'react';
import './Settings.css';

/**
 * Composant fonctionnel représentant une page de paramètres en développement.
 * 
 * Le composant affiche un titre, un message d'accueil et une note indiquant que la page est en cours de développement.
 * 
 * @returns {JSX.Element} Le JSX du composant `Settings` qui inclut un message d'accueil pour les utilisateurs.
 */
function Settings() {
  return (
    <div className="Settings">
      <header className="Settings-header">
        <h1>Bienvenue sur la page Settings en développement</h1>
        <p>
          Cette page est en cours de développement. Revenez bientôt pour plus de contenu !
        </p>
      </header>
    </div>
  );
}

export default Settings;
