//load express modules with required directive
var express = require('express');
var app = express();

//define the request in your url();
app.get('/', function(req, res){
     res.send('Hello World!');
})

//launch listening port on 8080
app.listen('8080', function(){
    console.log('App listening on port 8080!');
})