import React from 'react';
import Question from './Question.jsx';
import Answers from './Answers.jsx';
import Results from './Results.jsx';
// import ListItem from './ListItem.jsx';


//MAKE THE RESULTS RENDER ON TERNARY

const Trivia = (props) => (
  <div>
    <Question question={props.first}/>
    <Answers answers={props.first} ansArr={props.ansArr}/>
    <button onClick={props.onClick}>Show me the answer</button>
    {props.showAnswer ? <Results answer={props.first.correct_answer} nextQuestion={props.nextQuestion}/> : <p>Waiting...</p> }
  </div>
)

export default Trivia;

// { this.state.showResults ? <Results /> : null }



// category
// :
// "Geography"
// correct_answer
// :
// "Phoenix"
// difficulty
// :
// "easy"
// incorrect_answers
// :
// Array[3]
// question
// :
// "What is the capital of the American state of Arizona?"
// type
// :
// "multiple"