var express = require('express');
var router = express.Router();

console.log("in get file")
router.get('/', function(req, res, next) {

  var dataToSend;
  var options = {
    args: []
  };
  console.log("in get func")
  // spawn new child process to call the python script
  const python = spawn('python',  ['../python/getid.py']);
  console.log("end")
  // collect data from script
  python.stdout.on('data', function (data) {
    console.log('Pipe data from python script ...');
    dataToSend = data.toString();
  });
  // in close event we are sure that stream from child process is closed
  python.on('close', (code) => {
    console.log(`child process close all stdio with code ${code}`);
    // send data to browser
    res.send(dataToSend)
  });
  
});

module.exports = router;
