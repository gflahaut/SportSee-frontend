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
  
  export const normalizeUserActivity = (activity) => {
    return {
      sessions: activity.sessions || [],
    };
  };
  
  export const normalizeUserAverageSessions = (averageSessions) => {
    return {
      sessions: averageSessions.sessions || [],
    };
  };
  
  export const normalizeUserPerformance = (performance) => {
    return {
      data: performance.data.map((item) => ({
        value: item.value || 0,
        kind: performance.kind[item.kind] || 'Inconnu',
      })).reverse(),
    };
  };
  