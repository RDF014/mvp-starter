import express from 'express';
import bodyParser from 'body-parser';
import request from 'request';
import Users from '../database-mongo/index.js';

export default startServer;

async function startServer() {

  const app = express();
  const router = express.Router();

  app.use(express.static(__dirname + '/../react-client/dist'));
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(bodyParser.json({extended: true}));


  router.post('/Users', (req, res) => {
    console.log('users was called\n', req.body);
    Users.find({user: req.body.user}, (err, items) => {
      if (err) { console.log(err); }

      if(items.length) { // user does exist
        console.log(items[0]);
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
           console.log('here');
           res.status(201).send(newUsers);
         }
        })
      }
    })
  })


  router.post('/Score', (req, res) => {
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

  app.use('/', router);

  return new Promise(resolve => {
    const port = process.env.PORT || 1337;
    const server = app.listen(port, () => {
      console.log(`listening on port ${port}!`);
    });
    resolve(server);
  })

};

startServer();





