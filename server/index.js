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


  router.post('/', (req, res) => {
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

  app.use('/Users', router);

  return new Promise(resolve => {
    const port = process.env.PORT || 3000;
    const server = app.listen(port, () => {
      console.log(`listening on port ${port}!`);
    });
    resolve(server);
  })

};

startServer();





