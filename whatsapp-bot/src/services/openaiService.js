const axios = require('axios');

const apiKey = process.env.OPENAI_API_KEY;

exports.generateResponse = async (message) => {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/engines/davinci-codex/completions',
      {
        prompt: `Generate a charming response to: "${message}"`,
        max_tokens: 50,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
      }
    );

    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error('Error generating response from OpenAI:', error);
    throw error;
  }
};