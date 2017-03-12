import React from 'react';

const Question = (props) => (
  <div>
  <h4> Question </h4>
  <h5>Catagory: {props.question.category}</h5>
  <h5>Difficulty: {props.question.difficulty}</h5>
  <p>{props.question.question}</p>
  </div>
);

export default Question;