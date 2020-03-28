var express = require('express');
var app = express();
app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.render('home');
});

app.get('/images', function(req, res){
	var images = [
		'https://images.unsplash.com/photo-1558980664-2506fca6bfc2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
		'https://images.unsplash.com/photo-1585277133300-afef74ef7bb7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
	'https://images.unsplash.com/photo-1584844600434-2468871eb6b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'];
	res.render('images',{images : images});
});

app.listen(3000, function(){
	console.log('app started at 3000')
});