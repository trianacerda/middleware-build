const twilio = require('twilio');

const twilioClient = twilio(
  process.env.TWILIO_CLIENT_ID,
  process.env.TWILIO_AUTH_KEY
);

async function sendMessage(messenger, funny) {
  await twilioClient.messages.create({
    to: messenger,
    from: process.env.TWILIO_NUMBER,
    body: funny,
  });
}

module.exports = { sendMessage };
