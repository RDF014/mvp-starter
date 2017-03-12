import React from 'react';

const Answers = (props) => { 
  let items = [];
  items.push(props.answers.correct_answer);
  items = items.concat(props.answers.incorrect_answers);
  return (
    <ul>
    <input type="radio" name="q1" value="a" id="q1a"/>
    <label for="q1a">{props.ansArr[0]}</label>
    <br/>
    <input type="radio" name="q1" value="b" id="q1a"/>
    <label for="q1b">{props.ansArr[1]}</label>
    <br/>
    <input type="radio" name="q1" value="c" id="q1a"/>
    <label for="q1c">{props.ansArr[2]}</label>
    <br/>
    <input type="radio" name="q1" value="d" id="q1a"/>
    <label for="q1d">{props.ansArr[3]}</label>
    <br/>
  </ul>
  )
};

export default Answers;