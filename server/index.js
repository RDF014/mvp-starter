var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');


var Users = require('../database-mongo/index.js');

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.urlencoded());


app.get('/items', function(req, res) {
  request('https://opentdb.com/api.php?amount=10&category=any', (err, response, body) => {
  	if(err) {
  		console.log(err);
  	} else {
	  var data = JSON.parse(body);
	  // console.log(data);
	  res.status(201).send(data.results);
  	}
  })
});

app.post('/Users', function(req, res) {
	// var data = JSON.parse(req.body);
	// console.log(data)
	// console.log(typeof JSON.parse(req.body.users));
	var newUsers = new Users({
		user: req.body.user,
		HighScore: JSON.parse(req.body.highScore)
	});
	newUsers.save((err, newUsers) => {
		if(err) {
			console.log(err);
		} else {
			Users.find({}, (err, items) => {
				if(err) {
					console.log(err);
				} else {
					console.log(items);
				}
			});
			res.status(201).send(newUsers);
		}
	})
})


app.get('/users', function (req, res) { // GET request won't be don't a get request to the api.
  Users.selectAll(function(err, data) {
    if(err) {
      console.log(data)
      res.sendStatus(500);
    } else {
      // console.log(data)
      res.json(data);
    }
  });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});





