var crypto = require('crypto');
var express = require('express');
var router = express.Router();
const {spawn} = require('child_process');
require('dotenv').config();

router.post('/', function(req, res, next) {

    var dataToSend;
    console.log(req.body.post)
    var jstr = JSON.stringify(req.body.post)
    const python = spawn('python',  ['./python/dluser.py', process.env.MONGO_URL, jstr]);
    
    python.stdout.on('data', function (data) {
        console.log('Pipe data from python script ...');
        dataToSend = data.toString();
        console.log(dataToSend)
    });
    
    python.on('close', (code) => {
        console.log(`child process close all stdio with code ${code}`);

        res.send(dataToSend);
    });
});

module.exports = router;