/**
 * Données simulées pour un utilisateur.
 * Ces données incluent les informations de base de l'utilisateur, son score d'aujourd'hui, 
 * ainsi que les informations nutritionnelles et d'activité physique.
 * 
 * @constant
 * @type {Object}
 * @property {number} id - L'ID de l'utilisateur.
 * @property {Object} userInfos - Informations de l'utilisateur.
 * @property {string} userInfos.firstName - Le prénom de l'utilisateur.
 * @property {string} userInfos.lastName - Le nom de l'utilisateur.
 * @property {number} userInfos.age - L'âge de l'utilisateur.
 * @property {number} todayScore - Le score de l'utilisateur pour aujourd'hui (de 0 à 1).
 * @property {Object} keyData - Données nutritionnelles clés de l'utilisateur.
 * @property {number} keyData.calorieCount - Le nombre de calories consommées.
 * @property {number} keyData.proteinCount - Le nombre de protéines consommées.
 * @property {number} keyData.carbohydrateCount - Le nombre de glucides consommés.
 * @property {number} keyData.lipidCount - Le nombre de lipides consommés.
 */
export const mockUserData = {
  id: 13,
  userInfos: {
    firstName: "Luc",
    lastName: "Lachèvre",
    age: 31,
  },
  todayScore: 0.5,
  keyData: {
    calorieCount: 1936,
    proteinCount: 161,
    carbohydrateCount: 296,
    lipidCount: 56,
  },
};

/**
 * Données simulées pour l'activité d'un utilisateur.
 * Ces données incluent l'ID de l'utilisateur ainsi qu'un historique de ses sessions d'activité.
 * 
 * @constant
 * @type {Object}
 * @property {number} userId - L'ID de l'utilisateur.
 * @property {Array<Object>} sessions - Liste des sessions d'activité de l'utilisateur.
 * @property {string} sessions.day - La date de la session (format YYYY-MM-DD).
 * @property {number} sessions.kilogram - Le poids de l'utilisateur pendant cette session (en kg).
 * @property {number} sessions.calories - Le nombre de calories brûlées pendant cette session.
 */
export const mockUserActivity = {
  userId: 13,
  sessions: [
    { day: "2022-12-01", kilogram: 86, calories: 240 },
    { day: "2022-12-02", kilogram: 85, calories: 220 },
    { day: "2022-12-03", kilogram: 84, calories: 280 },
  ],
};

/**
 * Données simulées pour les sessions moyennes d'un utilisateur.
 * Ces données incluent l'ID de l'utilisateur et la durée de ses sessions d'entraînement moyennes.
 * 
 * @constant
 * @type {Object}
 * @property {number} userId - L'ID de l'utilisateur.
 * @property {Array<Object>} sessions - Liste des sessions avec leur durée.
 * @property {number} sessions.day - Le jour de la session.
 * @property {number} sessions.sessionLength - La durée de la session (en minutes).
 */
export const mockUserAverageSessions = {
  userId: 13,
  sessions: [
    { day: 1, sessionLength: 40 },
    { day: 2, sessionLength: 50 },
    { day: 3, sessionLength: 60 },
  ],
};

/**
 * Données simulées pour la performance d'un utilisateur.
 * Ces données incluent l'ID de l'utilisateur, ainsi qu'une classification des différents types de performances 
 * et des valeurs associées pour chaque type.
 * 
 * @constant
 * @type {Object}
 * @property {number} userId - L'ID de l'utilisateur.
 * @property {Object} kind - Un objet qui associe un identifiant numérique à un type de performance.
 * @property {number} kind[1] - Type de performance "cardio".
 * @property {number} kind[2] - Type de performance "énergie".
 * @property {number} kind[3] - Type de performance "endurance".
 * @property {number} kind[4] - Type de performance "force".
 * @property {number} kind[5] - Type de performance "vitesse".
 * @property {number} kind[6] - Type de performance "intensité".
 * @property {Array<Object>} data - Liste des performances avec leurs valeurs et types.
 * @property {number} data.value - La valeur de la performance.
 * @property {number} data.kind - L'identifiant du type de performance.
 */
export const mockUserPerformance = {
  userId: 13,
  kind: {
    1: "cardio",
    2: "energy",
    3: "endurance",
    4: "strength",
    5: "speed",
    6: "intensity",
  },
  data: [
    { value: 80, kind: 1 },
    { value: 120, kind: 2 },
    { value: 140, kind: 3 },
    { value: 50, kind: 4 },
    { value: 200, kind: 5 },
    { value: 90, kind: 6 },
  ],
};
