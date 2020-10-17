var express = require('express');
var router = express.Router();
var datetime = require('node-datetime');
var rsa = require('node-rsa');
require('dotenv').config();

router.get('/', function(req, res, next) {

  const key = new rsa();
  key.importKey(process.env.RSA_PRIV, 'pkcs8');
  message = key.decrypt("nNAQxrmNuAJxZni+60ysLLGjHuiZqcQ6/MiOAl1FTUBhMELFdx0u4sgYlxEf6h9EAMbFJy2wrYyaEue772vl65fSQ4V7iZv6WNfsP+yK6YFR/WK24+PF6Tc6EvZFsXq/NSk2m/FJKhjJzdCP3fpoSru2iuoOr+ulph3caqJdriE2R01LEssVu0pXQsEJVhPAR1KV/DSfh2/vCWcFSf8IhvNY19N6vvFE+VrY9/VuzLvDxClqWL+f/rfDAdke3/R7", 'utf8');
  console.log(message);
  try {
    jMess = JSON.parse(message);
    
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