const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGrid_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "omar.khalied.1@gmail.com",
    subject: "Thanks for joining in!",
    text: `Welcome to the app ${name}. let me know how you get along with the app`,
  });
};

const sendCancellationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "omar.khalied.1@gmail.com",
    subject: "Sorry to see you go!",
    text: `We are sorry to see you go, please ${name} let us now how we could have done better`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail,
};
