## Sending Emails with Node.js

```js
// Two popular options
// SendGrid = For production
// Ethereal
const nodemailer = require('nodemailer'); // really good for testing
const sgMail = require('@sendgrid/mail');
```

```js
const sendEmail = async (req, res) => {
  // create a .env file to store your keys and secrets
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  // Structure your message object with options
  const msg = {
    to: 'boraKaraca.dev@gmail.com',
    from: 'bora.karaca@ogr.iu.edu.tr',
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, facere.</p>',
  };
  // Send the msg with send() method
  const info = sgMail.send(msg);

  res.json(info); // You don't have to send the info.
};
```
```js
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
```

### End Result with SendGrid

![end result of sending an email](/test.png 'Result')
