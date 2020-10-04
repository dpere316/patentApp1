var crypto = require('crypto');
var express = require('express');
var router = express.Router();
const {spawn} = require('child_process');
require('dotenv').config();

router.post('/', function(req, res, next) {

    var dataToSend;
    const python = spawn('python',  ['./python/getusr.py', process.env.MONGO_URL, req.body.post]);
    
    python.stdout.on('data', function (data) {
        console.log('Pipe data from python script ...');
        dataToSend = data.toString();
        console.log(dataToSend)
    });
    
    python.on('close', (code) => {
        console.log(`child process close all stdio with code ${code}`);

        var jobj =JSON.parse(dataToSend);
        var safeData = {
          email: req.body.post,
          name: jobj['express']['name'],
          role: jobj['express']['role']
        }
        console.log(safeData)
        res.send(JSON.stringify(safeData));
    });
});

module.exports = router;
