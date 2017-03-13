import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Data from './Data/data.js';
import Init from './components/Init.jsx'
import User from './components/User.jsx';
import Parameters from './components/Parameters.jsx';
import Trivia from './components/Trivia.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      questionCount: 0,
      questions: [],
      answerArr: null,
      showAnswer: false,
      showButton: true,
      user: null,
      highScore: null,
      currentScore: 0
    }
    this.getApiUrl = this.getApiUrl.bind(this);
    this.clickAnswer = this.clickAnswer.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
    this.userButton = this.userButton.bind(this);
  }
  requestQuestions (url) {
    $.ajax({
      url: url, 
      type: 'GET',
      success: (data) => {
        this.setState({
          questions: data.results,
          answerArr: this.randomizeArray(data.results[0].correct_answer, data.results[0].incorrect_answers)
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  getApiUrl() {
    var amount = $("input[name='amount']").val();
    var catagory = $("select[name='catagories']").find('option:selected').attr("value");
    var difficulty = $("select[name='difficulty']").find('option:selected').text();
    var type = $("select[name='type']").find('option:selected').attr("value");
    
    var query = {
      amount: amount > 50 ? 50 : amount,
      catagory: catagory === 8 ? null : catagory,
      difficulty: difficulty,
      type: type
    }

    this.setState({
      questionCount: amount
    })
    
    var url = `https://opentdb.com/api.php?amount=${query.amount}`
    
    if(query.catagory !== '8') {
      url += `&category=${query.catagory}`
    }
    if(query.difficulty !== 'Any Difficulty') {
      url +=`&difficulty=${query.difficulty}`
    }
    if(query.type !== 'any'){
      url +=`&type=${query.type}`
    }
    this.requestQuestions(url);
  }

  randomizeArray(correct, incorrect) {
    let item = incorrect;
    item.push(correct);

    for (let i = 0; i < item.length; i++) {
      var original = item[i];
      var r = Math.floor( (Math.random()) * (item.length - 1) );
      item[i] = item[r];
      item[r] = original;
    }
    console.log(item);
    return item;
  }

  checkAnswer() {
    var current = this.state.questions[0];
    var guess = $("input[type='radio']:checked").next('label').text();
    if (guess !== current.correct_answer) {
      console.log('WRONG');
      return;
    } else {
      var score = this.state.currentScore;
      if(current.difficulty === 'easy') {this.setState({currentScore: ++score})}
      if(current.difficulty === 'medium') {this.setState({currentScore: score+=2})}
      if(current.difficulty === 'hard') {this.setState({currentScore: score+=3})}
    }
    console.log(guess, this.state.currentScore);
  }

  clickAnswer() {
    // check answer here
    this.checkAnswer();
    this.setState({
      showAnswer: true,
      showButton: false
    })
  }

  checkUpdateHighScore(){
    console.log(this.state.currentScore, this.state.highScore);
    if(this.state.currentScore > this.state.highScore){
      console.log('is higher')
      $.ajax({
        url: '/Users/Score', 
        type: 'POST',
        data: {
          user: this.state.user,
          highScore: this.state.currentScore
        },
        success: (data) => {
          console.log(data);
          this.setState({
            highScore: data.HighScore
          })
        },
        error: (err) => {
          console.log('err', err);
        }
      });
    }
  }

  nextQuestion() {
    if(this.state.questions.length === 1) {
      this.checkUpdateHighScore();
      this.setState({
        questions: [],
        answerArr: null,
        showAnswer: false,
        showButton: true,
        currentScore: 0
      })
    } else {
      var copy = this.state.questions.slice();
      copy.splice(0,1);
      var newAns = this.randomizeArray(copy[0].correct_answer, copy[0].incorrect_answers);

      this.setState({
        questions: copy,
        answerArr: newAns,
        showAnswer: false,
        showButton: true
      });
    }
  }

  userButton() {
    var name = $("input[name='user-name']").val();
    $.ajax({
      url: '/Users', 
      type: 'POST',
      dataType: 'json',
      data: {user: name},
      success: (data) => {
        console.log(data);
        this.setState({
          user: data.user,
          highScore: data.HighScore
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  componentDidMount() {
    // // console.log(Data) 

  }

  render () {
    return (<div>
      <h1>Simply Trivia</h1>
      <User onClick={this.userButton}
            userName={this.state.user}
            highScore={this.state.highScore}/>
      <Parameters data={Data} onClick={this.getApiUrl}/>
      {this.state.questions.length ? 
        <Trivia first={this.state.questions[0]} 
                ansArr={this.state.answerArr}
                onClick={this.clickAnswer}
                showButton={this.state.showButton}
                showAnswer={this.state.showAnswer}
                nextQuestion={this.nextQuestion}
                score={this.state.currentScore}
                count={this.state.questionCount}
                length={this.state.questions.length}
        />
      : 
      <Init />}
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
