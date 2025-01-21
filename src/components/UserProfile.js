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

const UserProfile = () => {
  const { profileId } = useContext(UserProfileContext);
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [userActivity, setUserActivity] = useState(null);
  const [userAverageSessions, setUserAverageSessions] = useState(null);
  const [userPerformance, setUserPerformance] = useState(null);
  const [error, setError] = useState(null);


  useEffect(() => {
    if (profileId) {
      const fetchData = async () => {
        try {
          const userResponse = await getUserData(profileId);
          setUserData(normalizeUserData(userResponse.data));

          const [activity, averageSessions, performance] = await Promise.all([
            getUserActivity(profileId),
            getUserAverageSessions(profileId),
            getUserPerformance(profileId),
          ]);

          setUserActivity(normalizeUserActivity(activity.data));
          setUserAverageSessions(normalizeUserAverageSessions(averageSessions.data));
          setUserPerformance(normalizeUserPerformance(
            performance.data
          ));
        } catch (error) {
          console.error('Error fetching user data:', error);
          setError(`Error fetching user data: ${error.message}`);
          navigate('/error');
        }
      };

      fetchData();
    }
  }, [profileId, navigate]);

  if (!profileId) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Redirecting...</p>;
  }

  if (!userData || !userData.userInfos) {
    return <p>Loading user data...</p>;
  }

  return (
    <div className='main'>
      <VerticalNav />
      <div className='UserProfile-container'>
        <div className='header-container'>
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
