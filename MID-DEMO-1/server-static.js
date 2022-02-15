//Activity Name: server-static.js
//Author Name: Mariano Patrick Januel B.
//Section and code: WD - 202 / 2083

var express = require('Express');
var app = express();

app.use(express.static('public'));

app.get("/", function(req, res){
    res.send("You have successfully created second app!");


});

var Server = app.listen(8081,'localhost', function(){
    var host = Server.address().address
    var port = Server.address().port

    console.log("Example app listening at http://%s:%s",host,port)
});
