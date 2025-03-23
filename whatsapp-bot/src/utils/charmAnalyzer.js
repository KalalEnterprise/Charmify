const axios = require('axios');

const apiKey = process.env.OPENAI_API_KEY;

const analyzeMessage = async (message) => {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/engines/davinci-codex/completions',
      {
        prompt: `Analyze the following message and assign a charm score based on tone, creativity, and engagement. Provide feedback on how to improve the message:\n\n"${message}"\n\nResponse format:\nCharm Score: [score]\nFeedback: [feedback]`,
        max_tokens: 150,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
      }
    );

    const analysis = response.data.choices[0].text.trim();
    const charmScoreMatch = analysis.match(/Charm Score: (\d+)/);
    const feedbackMatch = analysis.match(/Feedback: (.+)/);

    const charmScore = charmScoreMatch ? parseInt(charmScoreMatch[1], 10) : null;
    const feedback = feedbackMatch ? feedbackMatch[1].trim() : null;

    return { charmScore, feedback };
  } catch (error) {
    console.error('Error analyzing message:', error);
    throw error;
  }
};

module.exports = { analyzeMessage };