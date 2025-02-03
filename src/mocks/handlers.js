import { http } from 'msw';
import { mockUserData, mockUserActivity, mockUserAverageSessions, mockUserPerformance } from '../mocks/mockData';


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
// beforeAll(() => worker.listen());
// afterEach(() => worker.resetHandlers());
// afterAll(() => worker.close());

// test('should fetch user data', async () => {
//   const data = await getUserData(12);
//   expect(data.data.userInfos.firstName).toBe('John');
// });