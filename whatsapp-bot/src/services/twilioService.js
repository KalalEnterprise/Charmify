// This file can be used for Twilio-related services, such as sending messages
const twilio = require('twilio');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = new twilio(accountSid, authToken);

exports.sendMessage = (to, body) => {
  return client.messages.create({
    body: body,
    from: 'whatsapp:+14155238886', // Your Twilio WhatsApp number
    to: to,
  });
};