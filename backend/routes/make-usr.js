var crypto = require('crypto');
var express = require('express');
var router = express.Router();
require('dotenv').config();

router.get('/', function(req, res, next) {

    var name = 'examiner';
    var hash = crypto.createHash('md5').update(name).digest('hex');
    res.send("{'hsh' : "+hash+"}")    
  
});

module.exports = router;
