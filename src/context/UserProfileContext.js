import React, { createContext, useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * Contexte qui permet de partager l'ID du profil utilisateur au sein de l'application.
 * Ce contexte est utilisé pour gérer et accéder à l'ID du profil utilisateur, récupéré dynamiquement à partir de l'URL.
 * 
 * @module UserProfileContext
 * @example
 * import { useUserProfile } from './path/to/context';
 * 
 * // Utilisation du contexte pour accéder à l'ID du profil
 * const { profileId } = useUserProfile();
 * 
 * @returns {React.Context} UserProfileContext - Le contexte qui contient l'ID du profil et la fonction pour le mettre à jour.
 */
const UserProfileContext = createContext();

/**
 * Composant fournisseur (`Provider`) pour le `UserProfileContext`.
 * Ce composant enveloppe l'application et fournit l'ID du profil utilisateur ainsi qu'une fonction pour le mettre à jour.
 * Il utilise le hook `useParams` pour récupérer l'ID dynamique de l'URL.
 * 
 * @component
 * @example
 * <UserProfileProvider>
 *   <YourComponent />
 * </UserProfileProvider>
 * 
 * @param {Object} props - Les propriétés du composant.
 * @param {React.ReactNode} props.children - Les enfants à envelopper avec ce provider.
 * 
 * @returns {JSX.Element} Le fournisseur `UserProfileContext.Provider` qui permet à ses enfants d'accéder au contexte.
 */
export const UserProfileProvider = ({ children }) => {
  const { id } = useParams(); // Récupère l'ID de l'URL
  const [profileId, setProfileId] = useState(null);

  useEffect(() => {
    setProfileId(id || null); // Met à jour l'ID du profil avec l'ID extrait de l'URL ou `null` s'il n'y en a pas
  }, [id]);

  return (
    <UserProfileContext.Provider value={{ profileId, setProfileId }}>
      {children}
    </UserProfileContext.Provider>
  );
};

/**
 * Vérifie que les enfants du composant `UserProfileProvider` sont bien de type `ReactNode`.
 */
UserProfileProvider.propTypes = {
  children: PropTypes.node,
};

/**
 * Hook personnalisé pour accéder au contexte `UserProfileContext`.
 * Ce hook retourne les valeurs partagées par le contexte, c'est-à-dire l'ID du profil utilisateur et la fonction de mise à jour.
 * 
 * @returns {Object} L'objet contenant :
 * - `profileId`: L'ID du profil utilisateur actuellement sélectionné.
 * - `setProfileId`: La fonction pour mettre à jour l'ID du profil utilisateur.
 */
export const useUserProfile = () => {
  return useContext(UserProfileContext);
};

/**
 * Le contexte `UserProfileContext` qui permet à l'application d'accéder et de modifier l'ID du profil utilisateur.
 * 
 * @type {React.Context} 
 */
export default UserProfileContext;
