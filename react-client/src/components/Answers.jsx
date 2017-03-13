import React from 'react';

const Answers = (props) => { 
  let items = [];
  items.push(props.answers.correct_answer);
  items = items.concat(props.answers.incorrect_answers);
  return (
    <ul>
    {props.ansArr.map(answer => (
      <div>
      <input type="radio" name="q1" value="a" id="q1a"/>
      <label for="q1a">{answer}</label>
      <br/>
      </div>
    ))}
  </ul>
  )
};

export default Answers;