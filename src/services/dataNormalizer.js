/**
 * @fileoverview Fonctions de normalisation des données utilisateur.
 * Permet d'assurer un formatage cohérent des données issues de l'API.
 */

/**
 * Normalise les données utilisateur.
 * @param {Object} data - Données brutes de l'utilisateur.
 * @returns {Object} Données utilisateur normalisées.
 */
export const normalizeUserData = (data) => {
  return {
    userInfos: {
      firstName: data.userInfos?.firstName || 'Inconnu',
      lastName: data.userInfos?.lastName || '',
      age: data.userInfos?.age || 0,
    },
    todayScore: data.todayScore || data.score || 0,
    keyData: {
      calorieCount: data.keyData?.calorieCount || 0,
      proteinCount: data.keyData?.proteinCount || 0,
      carbohydrateCount: data.keyData?.carbohydrateCount || 0,
      lipidCount: data.keyData?.lipidCount || 0,
    },
  };
};

/**
* Normalise les données d'activité utilisateur.
* @param {Object} activity - Données brutes d'activité.
* @returns {Object} Données d'activité normalisées.
*/
export const normalizeUserActivity = (activity) => {
  return {
    sessions: activity.sessions || [],
  };
};

/**
* Normalise les sessions moyennes de l'utilisateur.
* @param {Object} averageSessions - Données brutes des sessions moyennes.
* @returns {Object} Données des sessions moyennes normalisées.
*/
export const normalizeUserAverageSessions = (averageSessions) => {
  return {
    sessions: averageSessions.sessions || [],
  };
};

/**
* Normalise les performances de l'utilisateur.
* @param {Object} performance - Données brutes de performance.
* @returns {Object} Données de performance normalisées.
*/
export const normalizeUserPerformance = (performance) => {
  return {
    data: performance.data.map((item) => ({
      value: item.value || 0,
      kind: performance.kind[item.kind] || 'Inconnu',
    })).reverse(),
  };
};
