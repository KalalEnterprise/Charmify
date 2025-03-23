const users = {}; // This should be replaced with a proper database in a real application

exports.getUserProgress = (userId) => {
  return users[userId] || { completedChallenges: [], badges: [] };
};

exports.updateUserProgress = (userId, challengeId) => {
  if (!users[userId]) {
    users[userId] = { completedChallenges: [], badges: [] };
  }

  if (!users[userId].completedChallenges.includes(challengeId)) {
    users[userId].completedChallenges.push(challengeId);

    // Reward badges based on completed challenges
    if (users[userId].completedChallenges.length === 5) {
      users[userId].badges.push('5 Challenges Completed');
    }
    if (users[userId].completedChallenges.length === 10) {
      users[userId].badges.push('10 Challenges Completed');
    }
  }
};