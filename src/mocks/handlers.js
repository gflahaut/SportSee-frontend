/**
 * Fichier qui définit les handlers de requêtes HTTP pour les données utilisateur simulées à l'aide de `msw`.
 * Ces handlers sont utilisés pour intercepter les appels API durant les tests ou le développement,
 * afin de retourner des réponses simulées en utilisant des données fictives.
 * 
 * @module handlers
 * @example
 * import { handlers } from './path/to/this/file';
 * 
 * // Ajout des handlers à un serveur de test ou de développement
 * worker.start();
 */

import { http } from 'msw';
import { mockUserData, mockUserActivity, mockUserAverageSessions, mockUserPerformance } from '../mocks/mockData';

/**
 * Liste des handlers pour les différentes requêtes HTTP liées aux données utilisateur.
 * Ces handlers interceptent les requêtes GET et retournent des réponses simulées pour chaque endpoint.
 * 
 * - `/user/:id` : Retourne les informations de base de l'utilisateur.
 * - `/user/:id/activity` : Retourne les données d'activité de l'utilisateur.
 * - `/user/:id/average-sessions` : Retourne les sessions moyennes de l'utilisateur.
 * - `/user/:id/performance` : Retourne les données de performance de l'utilisateur.
 * 
 * @type {Array<Object>} Tableau des handlers pour les requêtes GET
 */
export const handlers = [
  // Mock pour l'API utilisateur
  http.get('/user/:id', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: mockUserData
      })
    );
  }),

  // Mock pour l'activité utilisateur
  http.get('/user/:id/activity', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: mockUserActivity
      })
    );
  }),

  // Mock pour les sessions moyennes de l'utilisateur
  http.get('/user/:id/average-sessions', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: mockUserAverageSessions
      })
    );
  }),

  // Mock pour les performances de l'utilisateur
  http.get('/user/:id/performance', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: mockUserPerformance
      })
    );
  }),
];

// Code de gestion du serveur de tests (exemple commenté)
// beforeAll(() => worker.listen());
// afterEach(() => worker.resetHandlers());
// afterAll(() => worker.close());

/**
 * Exemple de test unitaire pour tester la récupération des données utilisateur.
 * 
 * @example
 * test('should fetch user data', async () => {
 *   const data = await getUserData(12);
 *   expect(data.data.userInfos.firstName).toBe('John');
 * });
 */
