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
      current: null
    }
    this.getApiUrl = this.getApiUrl.bind(this);
  }
  requestQuestions (url) {
    $.ajax({
      url: url, 
      type: 'GET',
      success: (data) => {
        console.log(data);
        this.setState({
          questions: data.results
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
    
    if(query.catagory > 8) {
      url += `&catagory=${query.catagory}`
      console.log(url);
    }
    if(query.difficulty !== 'Any difficulty') {
      url +=`&catagory=${query.difficulty}`
    }
    if(query.type !== 'any'){
      url +=`&type=${query.type}`
    }
    console.log(this)
    this.requestQuestions(url);
  }



  componentDidMount() {
    console.log(Data) 
    $.ajax({
      url: '/items', 
      type: 'POST',
      dataType: 'json',
      data: {
        user: 'MEH',
        highScore: 9000
      },
      success: (data) => {
        console.log(data);
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render () {
    return (<div>
      <h1>Simply Trivia</h1>
      <User />
      <Parameters data={Data} onClick={this.getApiUrl}/>
      {this.state.questions.length ? <Trivia items={this.state.items}/> : <Init />}
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
