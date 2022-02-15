//Activity Name: server.js - routing
//Author Name: Mariano Patrick Januel B.
//Section and code: WD - 202 / 2083

var express = require('Express');
var app = express();

app.get("/", function(req, res){
    console.log("There is GET request for homepage!");
    res.send("Here is the GET Method");

});

app.post("/", function(req, res){
    console.log("A post request for the home page is accessed");
    res.send("Here is the Post Method");

});

app.get("/list_user", function(req, res){
    console.log("Got a GET request for /list_user");
    res.send("This is Page Listing");

});

app.get("/ab*cd", function(req, res){
    console.log("Got a GET request for /ab*cd");
    res.send("Pattern Match Page");

});

var Server = app.listen(4000,'localhost', function(){
    var host = Server.address().address
    var port = Server.address().port

    console.log("Example app listening at http://%s:%s",host,port)
})