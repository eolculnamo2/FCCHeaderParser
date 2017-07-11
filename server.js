// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
const requestIp = require('request-ip');
const os = require('os')
// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

const ipMiddleware = function(req, res, next) {
    const clientIp = requestIp.getClientIp(req); 
    next();
};

app.use(requestIp.mw())
 
app.get("/", function(req, res) {
    const ip = req.clientIp;

  res.json({
    "IP Address": ip,
    "Language": req.headers["accept-language"],
    "Software": os.platform()
    })

});


 
// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
