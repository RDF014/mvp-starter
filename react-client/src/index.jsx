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
      questions: [],
      answerArr: null,
      showAnswer: false
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

  clickAnswer() {
    this.setState({
      showAnswer: true
    })
  }

  nextQuestion() {
    if(this.state.questions.length === 1) {
      this.setState({
        questions: [],
        answerArr: null,
        showAnswer: false
      })
    } else {
      var copy = this.state.questions.slice();
      copy.splice(0,1);
      var newAns = this.randomizeArray(copy[0].correct_answer, copy[0].incorrect_answers);

      this.setState({
        questions: copy,
        answerArr: newAns,
        showAnswer: false
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
        // this.setState({
        //   items: data
        // })
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
      <User onClick={this.userButton}/>
      <Parameters data={Data} onClick={this.getApiUrl}/>
      {this.state.questions.length ? 
        <Trivia first={this.state.questions[0]} 
                ansArr={this.state.answerArr}
                onClick={this.clickAnswer}
                showAnswer={this.state.showAnswer}
                nextQuestion={this.nextQuestion}
        />
      : <Init />}
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
