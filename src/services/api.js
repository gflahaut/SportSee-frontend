import axios from 'axios';
import { mockUserData, mockUserActivity, mockUserAverageSessions, mockUserPerformance } from '../mocks/mockData';

const API_BASE_URL = process.env.REACT_APP_USE_MOCKS === 'false' 
? 'http://localhost:5000' //Mock
: 'http://localhost:3000'; //Serveur réel

// // Handle API request errors
// const handleRequestError = (error) => {
//   console.error('API request failed:', error);
//   if (error.response) {
//     // The backend returned a response with an error status
//     throw new Error(`Error: ${error.response.data.message || 'An error occurred'} (status: ${error.response.status})`);
//   } else if (error.request) {
//     // The request was sent but no response was received
//     throw new Error('No response received from the server. Please try again later.');
//   } else {
//     // Something else went wrong
//     throw new Error('An unexpected error occurred.');
//   }
// };

// // Get user data by ID
// export const getUserData = async (id) => {
//   try {
//     console.log('Fetching user data for ID:', id); // Log avant la requête
//     const response = await axios.get(`${API_BASE_URL}/user/${id}`);
//     console.log('Response:', response.data); // Log après une réponse réussie
//     return response.data;
//     // const response = await axios.get(`${API_BASE_URL}/user/${id}`);
//     // return response.data;
//   } catch (error) {
//     handleRequestError(error);
//   }
// };

// // Get user activity by ID
// export const getUserActivity = async (id) => {
//   try {
//     console.log('Fetching user activity for ID:', id); // Log avant la requête
//     const response = await axios.get(`${API_BASE_URL}/user/${id}/activity`);
//     console.log('Response:', response.data); 
//     return response.data;
//   } catch (error) {
//     handleRequestError(error);
//   }
// };

// // Get user average sessions by ID
// export const getUserAverageSessions = async (id) => {
//   try {
//     console.log('Fetching user average sessions for ID:', id); // Log avant la requête
//     const response = await axios.get(`${API_BASE_URL}/user/${id}/average-sessions`);
//     console.log('Response:', response.data); 
//     return response.data;
//   } catch (error) {
//     handleRequestError(error);
//   }
// };

// // Get user performance by ID
// export const getUserPerformance = async (id) => {
//   try {
//     console.log('Fetching user performance for ID:', id); // Log avant la requête
//     const response = await axios.get(`${API_BASE_URL}/user/${id}/performance`);
    
//     return response.data;
//   } catch (error) {
//     handleRequestError(error);
//   }
// };

const USE_MOCKS = true;

export const getUserData = async (id) => {
  if (USE_MOCKS) {
    return Promise.resolve({ data: mockUserData });
  }
  // Appel réel à l'API
  const response = await axios.get(`${API_BASE_URL}/user/${id}`);
  return response.data;
};

export const getUserActivity = async (id) => {
  if (USE_MOCKS) {
    return Promise.resolve({ data: mockUserActivity });
  }
  // Appel réel à l'API
  const response = await axios.get(`${API_BASE_URL}/user/${id}/activity`);
  return response.data;
};

export const getUserAverageSessions = async (id) => {
  if (USE_MOCKS) {
    return Promise.resolve({ data: mockUserAverageSessions });
  }
  // Appel réel à l'API
  const response = await axios.get(`${API_BASE_URL}/user/${id}/average-sessions`);
  return response.data;
};

export const getUserPerformance = async (id) => {
  if (USE_MOCKS) {
    return Promise.resolve({ data: mockUserPerformance });
  }
  // Appel réel à l'API
  const response = await axios.get(`${API_BASE_URL}/user/${id}/performance`);
  return response.data;
};