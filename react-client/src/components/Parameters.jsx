import React from 'react';

const Parameters = (props) => (
  <div>
    <h4>Search Trivia</h4>
    <label for="amount">Number of Questions(from 1 - 50):</label>
    <input name="amount" type="number" min="1" max="50"/>
    <br/>
    <label for="catagories">Catagory:</label>
    <select name="catagories">{props.data.Catagories.map( (catagory, index) => <option value={index+8}>{catagory}</option>)}</select>
    <br/>
    <label for="difficulty">Difficulty:</label>
    <select name="difficulty">{props.data.Difficulty.map( difficulty => <option>{difficulty}</option>)}</select>
    <br/>
    <label for="type">Type:</label>
    <select name="type">{props.data.Type.map( type => <option value={type.value}>{type.text}</option>)}</select>
    <br/>
    <button onClick={props.onClick.bind(this)}>Lets Play!</button>
  </div>
);

export default Parameters;