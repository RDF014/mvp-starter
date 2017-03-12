import React from 'react';

const Results = (props) => (
  <div id="results" className="search-results">
    <p>Some Results</p>
    <button onClick={props.onClick}>Next Question</button>
  </div>
);

export default Results;