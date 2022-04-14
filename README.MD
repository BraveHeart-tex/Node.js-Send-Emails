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

### End Result

![end result of sending an email](/test.png 'Result')
