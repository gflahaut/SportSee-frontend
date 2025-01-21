import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001';

// Handle API request errors
const handleRequestError = (error) => {
  console.error('API request failed:', error);
  if (error.response) {
    // The backend returned a response with an error status
    throw new Error(`Error: ${error.response.data.message || 'An error occurred'} (status: ${error.response.status})`);
  } else if (error.request) {
    // The request was sent but no response was received
    throw new Error('No response received from the server. Please try again later.');
  } else {
    // Something else went wrong
    throw new Error('An unexpected error occurred.');
  }
};

// Get user data by ID
export const getUserData = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/user/${id}`);
    return response.data;
  } catch (error) {
    handleRequestError(error);
  }
};

// Get user activity by ID
export const getUserActivity = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/user/${id}/activity`);
    return response.data;
  } catch (error) {
    handleRequestError(error);
  }
};

// Get user average sessions by ID
export const getUserAverageSessions = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/user/${id}/average-sessions`);
    return response.data;
  } catch (error) {
    handleRequestError(error);
  }
};

// Get user performance by ID
export const getUserPerformance = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/user/${id}/performance`);
    return response.data;
  } catch (error) {
    handleRequestError(error);
  }
};
