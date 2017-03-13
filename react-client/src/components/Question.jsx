import React from 'react';

const Question = (props) => {
  let current = props.count - (props.length-1);
    return (
    <div>
    <h4>Question {current} out of {props.count}</h4>
    <h3>Score: {props.score}</h3>
    <h5>Catagory: {props.question.category}</h5>
    <h5>Difficulty: {props.question.difficulty}</h5>
    <p>{props.question.question}</p>
    </div>
  );
};

export default Question;