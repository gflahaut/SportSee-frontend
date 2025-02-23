/**
 * Composant `Profile` qui affiche le profil d'un utilisateur.
 * Ce composant récupère l'identifiant de l'utilisateur depuis les paramètres d'URL, puis utilise ce dernier pour afficher les informations du profil.
 * 
 * Le composant `UserProfileProvider` est utilisé pour fournir le contexte nécessaire au composant `UserProfile`.
 * 
 * @component
 * @example
 * return (
 *   <Profile />
 * )
 * 
 * @returns {JSX.Element} Le composant `Profile` qui rend un profil utilisateur avec un contexte spécifique.
 */
import React from 'react';
import UserProfile from '../../components/UserProfile';
import { useParams } from 'react-router-dom';
import { UserProfileProvider } from '../../context/UserProfileContext';

/**
 * Composant fonctionnel représentant une page de profil utilisateur.
 * 
 * Il récupère l'identifiant de l'utilisateur à partir des paramètres d'URL et le passe au composant `UserProfile` pour afficher les informations de ce dernier.
 * Le composant est enveloppé par `UserProfileProvider` afin de fournir un contexte nécessaire pour récupérer et gérer les données de l'utilisateur.
 * 
 * @returns {JSX.Element} Le JSX du composant `Profile` qui inclut un `UserProfileProvider` et un `UserProfile` avec l'ID utilisateur.
 */
export default function Profile() {
    // Récupère l'ID utilisateur à partir des paramètres de l'URL
    const { id } = useParams();
    
    return (
        <main className='profile'>
            <UserProfileProvider>
                <UserProfile userid={ id } />
            </UserProfileProvider>
        </main>
    );
}
