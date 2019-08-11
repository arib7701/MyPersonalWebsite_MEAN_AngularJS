var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var dotenv = require('dotenv').config();

var transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    type: 'OAuth2',
    clientId: dotenv.CLIENT_ID,
    clientSecret: dotenv.CLIENT_SECRET
  }
});

module.exports.sendEmail = function(req, res) {
  console.log('into sendEmail - server side');

  var data = req.body;

  var mailOptions = {
    from: '"From "' + data.email, // sender address
    to: 'aribotprojects@gmail.com', // list of receivers
    subject: 'Message from ' + data.firstName + ' ' + data.lastName, // Subject line
    text: data.tel + ' ' + data.mess, // plaintext body

    auth: {
      user: dotenv.USER_NAME,
      refreshToken: dotenv.REFRESH_TOKEN,
      accessToken: dotenv.ACCESS_TOKEN,
      expires: 1494388182480
    }
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: ' + info.response);
  });

  res.json(data);
};
