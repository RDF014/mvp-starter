import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Data from './Data/data.js';
import User from './components/User.jsx';
import Parameters from './components/Parameters.jsx';
import Trivia from './components/Trivia.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    }
  }
  componentDidMount() {
    console.log(Data) 
    $.ajax({
      url: '/Users', 
      type: 'POST',
      dataType: 'json',
      data: {
        user: 'MEH',
        highScore: 9000
      },
      success: (data) => {
        // console.log(data);
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
      <Parameters data={Data}/>
      <Trivia items={this.state.items}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
