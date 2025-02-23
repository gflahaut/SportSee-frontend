/**
 * Composant principal affichant le profil d'un utilisateur.
 * Ce composant récupère et affiche les données de l'utilisateur telles que ses informations personnelles, son activité,
 * ses sessions moyennes, ses performances et ses données nutritionnelles. Il affiche également plusieurs graphiques
 * et une carte avec les données pertinentes.
 * 
 * @component
 * @example
 * <UserProfile />
 * 
 * @returns {JSX.Element} Le profil utilisateur avec des graphiques et des informations clés.
 */
import './UserProfile.css';
import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import UserProfileContext from '../context/UserProfileContext';
import { getUserData, getUserActivity, getUserAverageSessions, getUserPerformance } from '../services/api';
import { normalizeUserData, normalizeUserActivity, normalizeUserAverageSessions, normalizeUserPerformance } from '../services/dataNormalizer';
import LineChart from './Charts/LineChart';
import CustomBarChart from './Charts/BarChart';
import CustomRadarChart from './Charts/RadarChart';
import CustomRadialBarChart from './Charts/RadialBarChart';
import Header from './Header';
import Map from './Map';
import VerticalNav from './VerticalNav';

/**
 * Composant affichant le profil utilisateur avec des données visuelles et statistiques.
 * Il récupère les données depuis des APIs externes, les normalise et les affiche sous forme de graphiques et de cartes.
 * 
 * @returns {JSX.Element} Un composant JSX affichant le profil de l'utilisateur avec ses données personnelles, des graphiques et des cartes.
 */
const UserProfile = () => {
  // Context pour récupérer l'ID du profil utilisateur depuis le contexte global.
  const { profileId } = useContext(UserProfileContext);
  const navigate = useNavigate();

  // États locaux pour stocker les données utilisateur et gérer les erreurs.
  const [userData, setUserData] = useState(null);
  const [userActivity, setUserActivity] = useState(null);
  const [userAverageSessions, setUserAverageSessions] = useState(null);
  const [userPerformance, setUserPerformance] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Si l'ID du profil est disponible, on récupère les données utilisateur.
    if (profileId) {
      const fetchData = async () => {
        try {
          // Appels API pour récupérer les données utilisateur.
          const userResponse = await getUserData(profileId);
          setUserData(normalizeUserData(userResponse.data));

          // Récupération des autres données (activité, sessions moyennes, performance) en parallèle.
          const [activity, averageSessions, performance] = await Promise.all([
            getUserActivity(profileId),
            getUserAverageSessions(profileId),
            getUserPerformance(profileId),
          ]);

          // Normalisation des données récupérées.
          setUserActivity(normalizeUserActivity(activity.data));
          setUserAverageSessions(normalizeUserAverageSessions(averageSessions.data));
          setUserPerformance(normalizeUserPerformance(performance.data));
        } catch (error) {
          console.error('Error fetching user data:', error);
          setError(`Error fetching user data: ${error.message}`);
          // Redirige l'utilisateur en cas d'erreur.
          navigate('/error');
        }
      };

      // Appel de la fonction pour récupérer les données.
      fetchData();
    }
  }, [profileId, navigate]);

  // Affichage d'un message de chargement si l'ID du profil est encore indéfini.
  if (!profileId) {
    return <p>Loading...</p>;
  }

  // Affichage d'un message en cas d'erreur de récupération des données.
  if (error) {
    return <p>Redirecting...</p>;
  }

  // Affichage d'un message de chargement si les données utilisateur ne sont pas encore disponibles.
  if (!userData || !userData.userInfos) {
    return <p>Loading user data...</p>;
  }

  return (
    <div className='main'>
      {/* Barre de navigation verticale */}
      <VerticalNav />
      <div className='UserProfile-container'>
        <div className='header-container'>
          {/* Affichage des informations d'en-tête (nom, âge, etc.) */}
          <Header userId={ profileId } />
        </div>
        <div className='container'>
          <div className='charts-container'>
            <div className='top-charts-container'>
              <div className='BC-container'>
                { userActivity && <CustomBarChart data={ userActivity.sessions } /> }
              </div>
            </div>
            <div className='bottom-charts-container'>
              <div className='LC-container'>
                { userAverageSessions && <LineChart data={ userAverageSessions.sessions } /> }
              </div>
              <div className='RC-container'>
                { userPerformance && <CustomRadarChart data={ userPerformance.data } /> }
              </div>
              <div className='RBC-container'>
                { userData && <CustomRadialBarChart data={ [{ todayScore: userData.todayScore }] } /> }
              </div>
            </div>
          </div>
          <div className='map-container'>
            {/* Affichage des données nutritionnelles sous forme de cartes */}
            <Map type="Calories" text={ userData.keyData.calorieCount } />
            <Map type="Glucides" text={ userData.keyData.carbohydrateCount } />
            <Map type="Protéines" text={ userData.keyData.proteinCount } />
            <Map type="Lipides" text={ userData.keyData.lipidCount } />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
