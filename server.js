var express = require('express');

var app = express();

app.get('/', function(req, res){
   res.send("Hello ! Who am I"); 
});

app.listen(process.env.PORT || 8080, function(){
    console.log("Who am i app listening to 8080 || process.env.PORT");
});