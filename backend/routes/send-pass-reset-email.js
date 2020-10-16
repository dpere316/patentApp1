var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var datetime = require('node-datetime');
var rsa = require('node-rsa');
require('dotenv').config();

router.get('/', function(req, res, next) {

  userEmail = 'examiner1@example.com';

  var dt = datetime.create();
  var formatted = dt.format('m/d/y H:M:S');

  const key = new rsa();
  key.importKey(process.env.RSA_PRIV, 'pkcs8');
  const text = "{\"email\":\""+userEmail+"\", \"time\":\""+formatted+"\"}";
  const encrypted = key.encrypt(text, 'base64');

  var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "c77a427533a42d",
      pass: "79482094cebd3e"
    }
  });

  const message = {
    from: 'LAC-password-reset@lac.com', 
    to: userEmail,      
    subject: 'password reset link',
    text: 'PAsSwoRd gO BrRr!! ' + "http://localhost:3000/PasswordReset?en=" + encrypted
  };

  transport.sendMail(message, function(err, info) {
    if (err) {
      console.log(err)
    } else {
      console.log(info);
    }
  });
    
});

module.exports = router;
