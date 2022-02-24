//Activity Name: mid-demo-1.js
//Author Name: Mariano Patrick Januel B.
//Section and code: WD - 202 / 2083


var express = require('Express');
var app = express();

app.use(express.static('public'));

app.get("/index.html", function(req, res){
    res.sendFile(__dirname + "/" + "index.html");
})

app.get("/process_get", function(req, res){
    response ={
        first_name:req.query.first_name,
        last_name:req.query.last_name
    };

    console.log(response);
    res.end(JSON.stringify(response));
})

var Server = app.listen(8081,'localhost', function(){
    var host = Server.address().address
    var port = Server.address().port

    console.log("Example app listening at http://%s:%s",host,port)
});