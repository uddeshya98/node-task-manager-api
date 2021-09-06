const mailgun = require("mailgun-js");

const mg = mailgun({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN
});

const sendWelcomeEmail = (email, name) => {
  const data = {
    from: "Task Manager <ud@task-manager.com>",
    to: email,
    subject: "Thanks for joining in!",
    text: `Welcome to the app, ${name}! Let me know how you get along with the app.`
  };
  mg.messages().send(data);
};

const sendCancellationEmail = (email, name) => {
  const data = {
    from: "Task Manager <ud@task-manager.com>",
    to: email,
    subject: "Sorry to see you go!",
    text: `Goodbye, ${name}. I hope to see you back sometime soon.`
  };
  mg.messages().send(data);
};

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail
};
