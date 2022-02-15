//Activity Name: firstexpress.js
//Author Name: Mariano Patrick Januel B.
//Section and code: WD - 202 / 2083
var express = require("Express");

var app = express();

app.get("/", function(request, response){
    response.send("Hello Word");

});

app.listen(3000, function(){
    console.log('Server Running at http://localhost:3000');
});