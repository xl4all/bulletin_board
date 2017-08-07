//require express, pg, pug & body-parser
//form met titel & body, submit button on the first page
//get request
//navigation bar
//we don't need fs 4 reading the pg database
//we need 2 install pug, but don't have 2 require it

//post request met body-parser
//div, h1, p
//navigation bar
//each loop in pug
//render page

//setting up the server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var pg = require('pg');

//setting
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', './views');
app.set('view engine', 'pug');


app.get('/writeMessage',function(req,res){
	response.render('index');
});
	var requestParameters = req.query;

app.post('/samplePostRequest', function (request, response) {
	console.log("post request received");
	console.log(request.body);

	response.send('data received: ' + JSON.stringify(request.body) + '\n');
});

app.listen(3000, function(){
	console.log('Working out of port 3000!')
})



