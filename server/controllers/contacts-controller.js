var nodemailer        = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

const user_name     = 'aribotprojects@gmail.com';
const refresh_token = '1/CdWoZAbACohUGzOfYe5U_FqOtpoEyNfRdoZG06sMcFc';
const access_token  = 'ya29.Gls5BUbZzxLB26eX-SfMILtAceGs3K5K8jb6UPtwvZnodw3znKTt0HVHHadqGJDnZt-apQBQvB0VFkknr2uVSsnXg6yEv9eIQx5fifVABqeXmg6Jkya53AhANqW7';
const client_id     = '852079723483-bq4nlmo591l5ftrebiargo8t434ul7k3.apps.googleusercontent.com';
const client_secret = 'I2NmxFd_EW-5L-g5-Uz0JbIE';

var transporter = nodemailer
    .createTransport({
        service: 'Gmail',
        auth: {
            type: 'OAuth2',
            clientId: client_id,
            clientSecret: client_secret
        }
    });

module.exports.sendEmail = function (req, res) {

    console.log("into sendEmail - server side");

     var data = req.body;

     var mailOptions = {
          from: '"From "' + data.email, // sender address
          to: 'aribotprojects@gmail.com', // list of receivers
          subject: 'Message from ' + data.firstName + ' ' + data.lastName, // Subject line
          text: data.tel + ' ' + data.mess, // plaintext body

          auth : {
            user         : user_name,
            refreshToken : refresh_token,
            accessToken  : access_token,
            expires      : 1494388182480
          }
      };
 
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });
 
    res.json(data);

}
