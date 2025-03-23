# Charmify WhatsApp Bot

Charmify is a WhatsApp bot that integrates with the Twilio API to handle messaging and provide automated responses. This project is built using Node.js and Express.js, with a focus on modularity and maintainability.

## Project Structure

```
whatsapp-bot
├── src
│   ├── app.js               # Entry point of the application
│   ├── routes               # Contains route definitions
│   │   └── index.js
│   ├── controllers          # Contains business logic for handling messages
│   │   └── botController.js
│   ├── services             # Contains services for external API integrations
│   │   └── twilioService.js
│   └── utils                # Contains utility functions
│       └── apiClient.js
├── package.json             # NPM configuration file
├── .env                     # Environment variables
├── README.md                # Project documentation
└── .gitignore               # Files to be ignored by Git
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/charmify.git
   cd charmify
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add your Twilio credentials:
   ```
   TWILIO_ACCOUNT_SID=your_account_sid
   TWILIO_AUTH_TOKEN=your_auth_token
   TWILIO_PHONE_NUMBER=your_twilio_phone_number
   ```

## Usage

To start the server, run:
```
npm start
```

The bot will listen for incoming WhatsApp messages and respond accordingly.

## Contributing

Feel free to submit issues or pull requests to improve the functionality and features of the Charmify WhatsApp bot.

## License

This project is licensed under the MIT License. See the LICENSE file for details.