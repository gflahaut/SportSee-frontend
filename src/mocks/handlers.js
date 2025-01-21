import { rest } from 'msw';

export const handlers = [
  rest.get('/user/:id', (req, res, ctx) => {
    const { id } = req.params;

    // Simule une réponse API basée sur l'ID de l'utilisateur
    return res(
      ctx.status(200),
      ctx.json({
        data: {
          userInfos: { firstName: 'John', lastName: 'Doe', age: 30 },
          todayScore: 0.8,
          keyData: {
            calorieCount: 2000,
            proteinCount: 150,
            carbohydrateCount: 300,
            lipidCount: 100,
          },
        },
      })
    );
  }),
  // Ajoutez d'autres gestionnaires pour les autres endpoints
];
