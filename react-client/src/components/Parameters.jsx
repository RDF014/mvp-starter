import React from 'react';

const Parameters = (props) => (
  <div>
    <h3>Trivia Parameters</h3>
    <label for="amount">Number of Questions:</label>
    <input name="amount" type="number" min="1" max="10" value="10"/>
    <br/>
    <label for="catagories">Catagory:</label>
    <select name="catagories">{props.data.Catagories.map( catagory => <option>{catagory}</option>)}</select>
    <br/>
    <label for="difficulty">Difficulty:</label>
    <select name="difficulty">{props.data.Difficulty.map( difficulty => <option>{difficulty}</option>)}</select>
    <br/>
    <label for="type">Type:</label>
    <select name="type">{props.data.Type.map( type => <option>{type}</option>)}</select>
  </div>
);

export default Parameters;