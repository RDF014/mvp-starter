import React from 'react';

const Answers = (props) => (
  <ul>
  <input type="radio" name="q1" value="a"/>
  <label for="q1a">{console.log(props)}</label>
  <br/>
  <input type="radio" name="q1" value="b"/>
  <label for="q1b">{props.random(props.answers)}</label>
  <br/>
  <input type="radio" name="q1" value="c"/>
  <label for="q1c">{props.random(props.answers)}</label>
  <br/>
  <input type="radio" name="q1" value="d"/>
  <label for="q1d">{props.random(props.answers)}</label>
  <br/>
</ul>);

export default Answers;