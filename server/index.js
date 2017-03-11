var express = require('express');
// var bodyParser = require('body-parser');
var request = require('request');

// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
var items = require('../database-mongo');

var app = express();

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

app.get('/items', function (req, res) {
  request('https://opentdb.com/api.php?amount=10', (err, res, body) => {
  	if(err) {
  		console.log(err);
  	} else {
  		console.log(`=================>${body}`);
  	}
  })
  items.selectAll(function(err, data) {
    if(err) {
      console.log(data)
      res.sendStatus(500);
    } else {
      console.log(data)
      res.json(data);
    }
  });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});





