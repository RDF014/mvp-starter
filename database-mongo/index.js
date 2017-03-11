var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/users');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var usersSchema = mongoose.Schema({
  user: String,
  HighScore: Number
});


usersSchema.method.selectAll = function(callback) {
  Users.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

var Users = mongoose.model('Users', usersSchema);

module.exports = Users;