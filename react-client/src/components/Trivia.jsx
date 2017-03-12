import React from 'react';
import Question from './Question.jsx';
import Answers from './Answers.jsx';
import Results from './Results.jsx';
// import ListItem from './ListItem.jsx';


//MAKE THE RESULTS RENDER ON TERNARY

const Trivia = (props) => (
  <div>
    <Question />
    <Answers />
    <button onClick={props.onClick}>Show me the answer</button>
    <Results />
  </div>
)

export default Trivia;

// { this.state.showResults ? <Results /> : null }


