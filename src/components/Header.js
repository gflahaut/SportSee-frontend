/**
 * Composant d'en-tête affichant un message de bienvenue personnalisé pour l'utilisateur, en fonction de son prénom
 * et des données récupérées via l'API. Ce composant affiche également un message de félicitations pour l'atteinte
 * des objectifs de l'utilisateur.
 * 
 * @component
 * @example
 * // Exemple d'utilisation du composant Header
 * <Header userId="12" />
 * 
 * @param {Object} props - Les propriétés passées au composant.
 * @param {string} props.userId - L'ID de l'utilisateur pour récupérer ses données depuis l'API.
 * 
 * @returns {JSX.Element} Un élément JSX représentant l'en-tête avec un message personnalisé pour l'utilisateur.
 */
import React, { useEffect, useState } from 'react';
import { getUserData } from '../services/api';
import PropTypes from 'prop-types';
import './Header.css';

/**
 * Composant qui affiche un message de bienvenue et des félicitations à l'utilisateur, en utilisant son prénom
 * et en vérifiant s'il a atteint ses objectifs.
 * 
 * @param {Object} props - Les propriétés passées au composant.
 * @param {string} props.userId - L'ID de l'utilisateur pour récupérer ses données depuis l'API.
 * 
 * @returns {JSX.Element} Un élément JSX représentant l'en-tête avec un message personnalisé pour l'utilisateur.
 */
const Header = ({ userId = 'default value' }) => {
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userResponse = await getUserData(userId);
                setUserData(userResponse.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
                setError(`Error fetching user data: ${error.message}`);
            }
        };

        fetchData();
    }, [userId]);

    if (error) {
        return <p>Error: { error }</p>;
    }

    if (!userData || !userData.userInfos) {
        return <p>Loading...</p>;
    }

    return (
        <div className='Header-wrapper'>
            <p>Bonjour <span className="highlight">{ userData.userInfos.firstName }</span></p>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    );
};

Header.propTypes = {
    userId: PropTypes.string.isRequired,
};

export default Header;
