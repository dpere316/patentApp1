var express = require('express');
var router = express.Router();
var datetime = require('node-datetime');
var rsa = require('node-rsa');
require('dotenv').config();

router.get('/', function(req, res, next) {

  const key = new rsa();
  key.importKey(process.env.RSA_PRIV, 'pkcs8');
  message = key.decrypt("dmGhgM47r+w6uBuTGFxpYenTpQr9P1HyP7xNbkYAzfG48P4nlVe7hV7Najt1NOMa/yUuwttt3ckCWsnyI/6n7jRwzVVpnUdgRfucTkLdllGpUlZwNtWrVnaP6t1OixbnMyCZXYsSo7RLCA/+r7UpJGkhvCHkbkAKBKJNHC4bgiMDH61OVGwgONlkZUGmKaxkQ+mVFCAQq8KkoMldg9Ugq8TkZeYYpXi6YuavQp58+MYnsBTPaZzR8ZjUD9tyinPP", 'utf8');
  console.log(message);
  try {
    jMess = JSON.parse(message);
    console.log("past parse");
    var dt = datetime.create();
    var formatted = dt.format('m/d/y H:M:S');
    tokenDate = new Date(jMess.time);
    curDate = new Date(formatted);

    console.log(curDate-tokenDate);
    var mili = 1000 * 60 * 30 //30 minutes
    if ((curDate-tokenDate) < mili){
      res.send("{\"auth\":true}");
    }else{
      res.send("{\"auth\":false}");
    }
  } catch (error) {
    res.send("Invalid URL format.")
  }
});

module.exports = router;