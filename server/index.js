var express = require('express');
// var bodyParser = require('body-parser');
var request = require('request');


var Questions = require('../database-mongo/index.js');

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));


app.post('/items', function(req, res) {
  request('https://opentdb.com/api.php?amount=10', (err, response, body) => {
  	if(err) {
  		console.log(err);
  	} else {
  		var data = JSON.parse(body);
  		// console.log(data.results);
  		data.results.forEach((question) => {
  			// console.log(Questions);
  			var newQuestion = new Questions({
  			 	category: question.category,
  			 	correct_answer: question.correct_answer,
  			 	difficulty: question.difficulty,
  			 	incorrect_answers: question.incorrect_answers,
  			 	question: question.question,
  			 	type: question.type
  			});
  			newQuestion.save((err, newQuestion) => {
  			 	if(err) {
  			 		console.log(err);
  			 		res.status(500).send(err);
  			 	} 
  			})
  		})
 		Questions.find({}).exec(function(err, Questions) {
		  res.status(201).send(Questions);
		});
  	}
  })
});

// { category: 'Animals',
//     type: 'multiple',
//     difficulty: 'easy',
//     question: 'What is the scientific name for modern day humans?',
//     correct_answer: 'Homo Sapiens',
//     incorrect_answers: [ 'Homo Ergaster', 'Homo Erectus', 'Homo Neanderthalensis' ] },


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





