var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');


var Users = require('../database-mongo/index.js');

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.urlencoded({extended: false}));

var port = process.env.PORT || 3000;

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


app.post('/Users/Score', function (req, res) {
  console.log('1st', req.body); 
  if(req.body.user !== '') {
    Users.findOne({user: req.body.user}, function(err, data) {
      if(err) {
        console.log('err', data)
        res.send(err);
      } else {
        console.log('2nd', data)
        data.HighScore = req.body.highScore;
        data.save();
        res.send(data);
      }
    });
    
  }
  // res.send('was sent back');
});

app.listen(port, function() {
  console.log(`listening on port ${port}!`);
});





