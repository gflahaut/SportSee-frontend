
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
  
  export const mockUserActivity = {
    userId: 13,
    sessions: [
      { day: "2022-12-01", kilogram: 86, calories: 240 },
      { day: "2022-12-02", kilogram: 85, calories: 220 },
      { day: "2022-12-03", kilogram: 84, calories: 280 },
    ],
  };
  
  export const mockUserAverageSessions = {
    userId: 13,
    sessions: [
      { day: 1, sessionLength: 40 },
      { day: 2, sessionLength: 50 },
      { day: 3, sessionLength: 60 },
    ],
  };
  
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