/**
 * @fileoverview Composant de la page Communauty.
 * Affiche un message indiquant que la page est en cours de développement.
 */

import React from 'react';
import './Communauty.css';

/**
 * Composant de la page Communauty.
 * @returns {JSX.Element} Composant React représentant la page Communauty.
 */
function Communauty() {
  return (
    <div className="Communauty">
      <header className="Communauty-header">
        <h1>Bienvenue sur la page Communauty en développement</h1>
        <p>
          Cette page est en cours de développement. Revenez bientôt pour plus de contenu !
        </p>
      </header>
    </div>
  );
}

export default Communauty;
