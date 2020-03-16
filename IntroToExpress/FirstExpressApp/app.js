console.log('Nanum Web app thanda');

var express = require("express");
var app = express();

// "/" => "Hi there!.. I'm using express"
app.get("/", function(req, res){
	res.send("Hi there!.. I'm using express!");
});

// "/bye" => "Good Bye!!"
app.get("/bye", function(req, res){
	res.send("Good Bye!!");
});

// "Kitty" => "Meow"
app.get("/kitty",function(req, res){
	res.send("Meow");
});

app.get("/r/:subredditName",function(req, res){
	res.send("You are in a Sub Reddit!");
});


app.get("/r/:subredditName/comment/:id/:title",function(req, res){
	res.send("You are in a Sub Reddit!");
});

app.get("*", function(req, res){
	res.send("You are a STAR");
});

// Server start
app.listen(3000, function(){
	console.log('Server listening on port 3000');
});