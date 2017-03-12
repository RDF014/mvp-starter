var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');


var Users = require('../database-mongo/index.js');

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.urlencoded({extended: false}));

app.post('/Users', function(req, res) {
	Users.find({user: req.body.user}, (err, items) => {
    if(err){console.log(err)}

    if(items.length) { // user does exist
      console.log(items);
      res.status(201).send(items[0]);
    } else {
      var newUsers = new Users({
       user: req.body.user,
       HighScore: req.body.highScore || 0
      });
      newUsers.save((err, newUsers) => {
       if(err) {
         console.log(err);
       } else {
         Users.find({user: req.body.user}, (err, items) => {
           if(err) {
             console.log(err);
           } else {
             console.log(items);
           }
         });
         res.status(201).send(newUsers);
       }
      })
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





