import React from 'react';

const Answers = (props) => (
  <ul>
  <input type="radio" name="q1" value="a"/>
  <label for="q1a">Answer 1</label>
  <br/>
  <input type="radio" name="q1" value="b"/>
  <label for="q1b">Answer 2</label>
  <br/>
  <input type="radio" name="q1" value="c"/>
  <label for="q1c">Answer 3</label>
  <br/>
  <input type="radio" name="q1" value="d"/>
  <label for="q1d">Answer 4</label>
  <br/>
</ul>);

export default Answers;