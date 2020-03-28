var express = require('express');
var app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/:page',function(req, res){
	var page = req.params.page;
	res.render('home', { page : page } );
});

app.listen(3000, function(){
	console.log("App running on port 3000")
});