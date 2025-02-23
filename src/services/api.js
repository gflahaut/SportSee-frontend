/**
 * @fileoverview Module de gestion des appels API pour récupérer les données utilisateur.
 * Supporte l'utilisation de données mockées pour le développement.
 */

import axios from 'axios';
import { mockUserData, mockUserActivity, mockUserAverageSessions, mockUserPerformance } from '../mocks/mockData';

/**
 * URL de base de l'API.
 * @constant {string}
 */
const API_BASE_URL = 'http://localhost:3000';

/**
 * Indicateur d'utilisation des données mockées.
 * @constant {boolean}
 */
const USE_MOCKS = false;

/**
 * Récupère les données utilisateur.
 * @async
 * @param {number} id - Identifiant de l'utilisateur.
 * @returns {Promise<Object>} Données de l'utilisateur.
 */
export const getUserData = async (id) => {
  if (USE_MOCKS) {
    return Promise.resolve({ data: mockUserData });
  }
  const response = await axios.get(`${API_BASE_URL}/user/${id}`);
  return response.data;
};

/**
 * Récupère l'activité de l'utilisateur.
 * @async
 * @param {number} id - Identifiant de l'utilisateur.
 * @returns {Promise<Object>} Activité de l'utilisateur.
 */
export const getUserActivity = async (id) => {
  if (USE_MOCKS) {
    return Promise.resolve({ data: mockUserActivity });
  }
  const response = await axios.get(`${API_BASE_URL}/user/${id}/activity`);
  return response.data;
};

/**
 * Récupère les sessions moyennes de l'utilisateur.
 * @async
 * @param {number} id - Identifiant de l'utilisateur.
 * @returns {Promise<Object>} Sessions moyennes de l'utilisateur.
 */
export const getUserAverageSessions = async (id) => {
  if (USE_MOCKS) {
    return Promise.resolve({ data: mockUserAverageSessions });
  }
  const response = await axios.get(`${API_BASE_URL}/user/${id}/average-sessions`);
  return response.data;
};

/**
 * Récupère la performance de l'utilisateur.
 * @async
 * @param {number} id - Identifiant de l'utilisateur.
 * @returns {Promise<Object>} Performance de l'utilisateur.
 */
export const getUserPerformance = async (id) => {
  if (USE_MOCKS) {
    return Promise.resolve({ data: mockUserPerformance });
  }
  const response = await axios.get(`${API_BASE_URL}/user/${id}/performance`);
  return response.data;
};
