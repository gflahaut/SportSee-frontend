import React, { createContext, useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const UserProfileContext = createContext();

export const UserProfileProvider = ({ children }) => {
  const { id } = useParams(); // Récupère l'ID de l'URL
  const [profileId, setProfileId] = useState(null);

  useEffect(() => {
    setProfileId(id || null);
  }, [id]);

  return (
    <UserProfileContext.Provider value={{ profileId, setProfileId }}>
      {children}
    </UserProfileContext.Provider>
  );
};

UserProfileProvider.propTypes = {
  children: PropTypes.node,
};

export const useUserProfile = () => {
  return useContext(UserProfileContext);
};

export default UserProfileContext;
