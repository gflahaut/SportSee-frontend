/**
 * Composant `NotFound` affiché lorsqu'une page introuvable (erreur 404) est rencontrée.
 * Ce composant affiche un message d'erreur personnalisé ou par défaut, ainsi qu'un lien pour retourner à la page d'accueil.
 * 
 * @component
 * @example
 * return (
 *   <NotFound />
 * )
 * 
 * @returns {JSX.Element} Le composant `NotFound` rend un message d'erreur avec un lien vers la page d'accueil.
 */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./NotFound.css";

/**
 * Composant fonctionnel pour afficher une page d'erreur 404.
 * 
 * Il récupère le message d'erreur passé dans les `state` de l'URL (s'il existe), sinon il affiche un message par défaut.
 * 
 * @returns {JSX.Element} Le JSX du composant `NotFound` qui inclut le message d'erreur et un lien de retour à la page d'accueil.
 */
function NotFound() {
  const location = useLocation();
  
  // Récupère le message d'erreur à partir de l'état de la localisation (si défini)
  const message = location.state?.message || "Oups ! La page que vous demandez n'existe pas";
  
  return (
    <main className="not-found">
      <h1 className="not-found-h1">404</h1>
      <p className="not-found-p">{ message }</p>
      <Link to="/" className="not-found-return-home">Retourner sur la page d'accueil</Link>
    </main>
  );
};

export default NotFound;
