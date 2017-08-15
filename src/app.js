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

//Database
const client = new pg.Client({
  database: 'bulletinboard',
  host: 'localhost',
  user: 'postgres',
  password: 'postgres',
})
client.connect()//we maken verbinding met de database

//setting
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/',function(req,res){

	res.render('index')
});

app.get('/postedMessages',function(req,res){
	// var readMessages = select title from messages
	// var readBody = select body from messages
	client.query('select * from messages;', (err, result) =>{
		//console.log(result.rows)
		if(err) {
			throw err;
		}
		res.render('postedmessages',{messages:result.rows}); //result.rows is info die je meestuurt met de pugfile
	});
});
	
app.post('/addmessage', function (req, res){
	var messageTitle = req.body.title;  
	var messageBody = req.body.body;
	// console.log(messageTitle)
	// console.log(messageBody);
	client.query(`insert into messages(title, body) values ('${messageTitle}','${messageBody}')`, function (err, result) {
		if(err) {
			throw err;
		}

		res.redirect('/postedMessages');

														

	// ,{searcheduser:matchedUser}

		// console.log("post request received");
		// console.log(req.body);

	});
});



app.listen(3000, function(){
	console.log('Working out of port 3000!')
})



