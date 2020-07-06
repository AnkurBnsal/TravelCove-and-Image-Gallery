var express = require("express");
var app = express();

app.use(express.static(__dirname + "/public"));


app.get("/gallery", function(req, res){
	res.render("gallery.ejs");
});

app.get("/travel", function(req, res){
	res.render("travel.ejs");
});

app.listen( process.env.PORT || 3000, process.env.IP );