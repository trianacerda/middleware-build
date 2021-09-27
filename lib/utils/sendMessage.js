const twilio = require('twilio');

const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

async function sendMessage(messenger, funny) {
  await twilioClient.messages.create({
    to: messenger,
    from: process.env.TWILIO_NUMBER,
    body: funny,
  });
}

module.exports = { sendMessage };
