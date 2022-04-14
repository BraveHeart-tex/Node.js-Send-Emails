const nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail');

const sendEmailEthereal = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'jarred.goyette5@ethereal.email',
      pass: 'u8v8Nvy4mTvqU35M8E',
    },
  });

  let info = await transporter.sendMail({
    from: 'Bora Karaca <boraKaraca.dev@gmail.com>',
    to: 'bora.karaca@ogr.iu.edu.tr',
    subject: 'Hello,',
    html: '<h2>Sending Emails with Node.js :D</h2>',
  });

  res.json(info);
};

const sendEmail = async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: 'boraKaraca.dev@gmail.com',
    from: 'bora.karaca@ogr.iu.edu.tr',
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, facere.</p>',
  };
  const info = sgMail.send(msg);
  res.json(info);
};

module.exports = sendEmail;
