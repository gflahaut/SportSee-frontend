import axios from 'axios';
import { mockUserData, mockUserActivity, mockUserAverageSessions, mockUserPerformance } from '../mocks/mockData';

const API_BASE_URL =  'http://localhost:3000'; 

const USE_MOCKS = false;

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