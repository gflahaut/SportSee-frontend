import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./NotFound.css";

function NotFound() {
  const location = useLocation();
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