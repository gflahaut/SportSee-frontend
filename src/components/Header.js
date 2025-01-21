import React, { useEffect, useState } from 'react';
import { getUserData } from '../services/api';
import PropTypes from 'prop-types';
import './Header.css';

const Header = ({ userId= 'default value' }) => {
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
