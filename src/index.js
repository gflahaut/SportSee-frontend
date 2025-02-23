/**
 * @fileoverview Point d'entrée principal de l'application React.
 * Il configure le rendu de l'application et gère le contexte utilisateur.
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UserProfileProvider } from './context/UserProfileContext';

/**
 * Création de la racine React pour le rendu de l'application.
 * @type {ReactDOM.Root}
 */
const root = ReactDOM.createRoot(document.getElementById('root'));

/**
 * Si l'application est en mode développement, active le service worker de simulation d'API.
 */
if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/worker');
  worker.start();
}

/**
 * Rendu de l'application React dans la racine du DOM.
 */
root.render(
  <React.StrictMode>
    <Router>
      <UserProfileProvider>
        <App />
      </UserProfileProvider>
    </Router>
  </React.StrictMode>
);

/**
 * Mesure des performances de l'application (optionnel).
 */
reportWebVitals();
