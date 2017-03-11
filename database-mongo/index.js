var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/questions');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var questionSchema = mongoose.Schema({
  catagory: String,
  correct_answer: String,
  difficulty: String,
  incorrect_answers: Array,
  question: String,
  type: String
});


questionSchema.method.selectAll = function(callback) {
  Question.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

var Question = mongoose.model('Question ', questionSchema);

module.exports = Question;