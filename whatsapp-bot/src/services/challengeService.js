const dailyChallenges = [
  { id: 1, description: 'Send a compliment to someone' },
  { id: 2, description: 'Use a specific opener: "What’s your favorite hobby?"' },
  // Add more challenges as needed
];

exports.getDailyChallenge = () => {
  const today = new Date().getDate();
  return dailyChallenges[today % dailyChallenges.length];
};