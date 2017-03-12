import React from 'react';

const Results = (props) => (
  <div id="results" className="search-results">
    <p>The answer is: {props.answer}</p>
    <button onClick={props.nextQuestion}>Next Question</button>
  </div>
);

export default Results;