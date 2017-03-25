var express = require('express');
var useragent = require('useragent');

var app = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/api/whoami', function (req, res) {
    
    var agent = useragent.parse(req.headers['user-agent']);
    
    res.json({
        ipaddress: req.headers["x-forwarded-for"] || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress,
        language: req.headers["accept-language"].split(",")[0],
        software:req.headers['user-agent'].split(') ')[0].split(' (')[1]
    });
});

app.listen(process.env.PORT || 8080, function(){
    console.log("Who am i app listening to 8080 || process.env.PORT");
});